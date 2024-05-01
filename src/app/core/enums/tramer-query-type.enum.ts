export enum TramerQueryTypeEnum {
    ChassisNumber = 1,
    PlateNumber = 2
}

export const TramerQueryTypeLabelMapping: Record<TramerQueryTypeEnum, string> = {
    [TramerQueryTypeEnum.ChassisNumber]: "Şaşi Numarası",
    [TramerQueryTypeEnum.PlateNumber]: "Plaka Numarası"
}