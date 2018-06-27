export interface SearchModel {
  id: string;
  version: number;
  baseKey: {
    region: string;
    undRegionGroup: string;
    swapGroup: string;
    modelGroup: string;
  };

  lastUpdatedTime: string;
  lastUpdatedBy: string;
  reviewBy: string;
  reviewedTime: string;
}
