export interface Profile {
  id: string;
  searchInfo: {
    lastUpdateBy: string;
    lastUpdateTime?: Date;
    baseKey: {
      region: string;
      swapGroup: string;
      model:  string;
    }
  };
}


export function generateMockProfile(id: string): Profile {
  return {
    id: id,
    searchInfo: {
      lastUpdateBy: '',
      baseKey: {
        region: '',
        swapGroup: '',
        model: ''
      }
    }
  };
}
