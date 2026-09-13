export function focusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), summary, input:not([disabled]), [tabindex="0"]',
    ),
  ).filter((element) => element.getClientRects().length > 0 && !element.closest("[inert]"));
}

export function trapFocus(event: KeyboardEvent, container: HTMLElement) {
  if (event.key !== "Tab") return;
  const elements = focusableElements(container);
  const first = elements[0];
  const last = elements.at(-1);
  if (!first || !last) return;
  if (
    event.shiftKey &&
    (document.activeElement === first || !container.contains(document.activeElement))
  ) {
    event.preventDefault();
    last.focus();
  } else if (
    !event.shiftKey &&
    (document.activeElement === last || !container.contains(document.activeElement))
  ) {
    event.preventDefault();
    first.focus();
  }
}
