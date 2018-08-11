export interface MasterDefault {
  id: string;
  searchInfo: {
    lastUpdateBy: string;
    lastUpdateTime?: Date;
    baseKey: {
      region: string;
      model:  string;
    }
  };
}


export function generateMockMasterDefault(id: string): MasterDefault {
  return {
    id: id,
    searchInfo: {
      lastUpdateBy: '',
      baseKey: {
        region: '',
        model: ''
      }
    }
  };
}
