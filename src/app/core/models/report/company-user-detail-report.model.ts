import { TramerQueryTypeEnum } from "../../enums/tramer-query-type.enum";

export class CompanyUserDetailReportModel {
    companyName: string;
    userName: string;
    queryDate: Date;
    tramerQueryType: TramerQueryTypeEnum;
    tramerQuery: string;
    price: number;
    response: string;
    isExistQuery: boolean;
    oldQueryDate?: Date;
    oldResponse?: string;
}
