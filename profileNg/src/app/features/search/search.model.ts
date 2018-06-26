export interface SearchModel {
  id: string;
  version: number;
  baseKey: {
    region: string;
    undRegionGroup: string;
    swapGroup: string;
    modelGroup: string;
  };

  lastUpdateTime: string;
  lastUpdateBy: string;
  reviewBy: string;
  reviewedTime: string;
}
