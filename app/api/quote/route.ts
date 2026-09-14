import { handleEnquiry } from "@/lib/enquiry-handler";
export const runtime = "nodejs";
export function POST(request: Request) {
  return handleEnquiry(request, "quote");
}
