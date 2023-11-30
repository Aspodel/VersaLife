// import { BaseService, IBaseServiceModel } from "./baseService";

// interface IUsageServiceModel extends IBaseServiceModel<IUsage> {
//     getByLocation: (locationId: number | string) => Promise<IUsage[]>;
// }

// export function UsageService(): IUsageServiceModel {
//   const path = "usage";
//   const { get, getDetails, create, update, remove } = BaseService<IUsage>({
//     controllerPath: path,
//   });

//   return {
//     get,
//     getDetails,
//     create,
//     update,
//     remove,
//   };
// }