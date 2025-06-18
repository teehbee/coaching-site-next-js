import type { PortableTextBlock } from "@portabletext/types";

export interface ReviewSectionItem {
  reviewSectionText: PortableTextBlock[];
  reviewSectionName: string;
}

export interface ReviewsInterface {
  _id: string;
  ReviewSection: ReviewSectionItem[];
}
