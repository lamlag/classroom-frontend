import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {MOCK_SUBJECTS} from "../constants/mockData";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') return {data: [] as TData[], total: 0};
    console.log("test");
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },
  getOne: async () => {
    throw new Error('Not yet implemented in the mock data provider.');
  },
  create: async () => {
    throw new Error('Not yet implemented in the mock data provider.');
  },
  update: async () => {
    throw new Error('Not yet implemented in the mock data provider.');
  },
  deleteOne: async () => {
    throw new Error('Not yet implemented in the mock data provider.');
  },
  getApiUrl: () => '',
};