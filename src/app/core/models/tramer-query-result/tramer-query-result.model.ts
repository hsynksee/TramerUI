export class TramerQueryResultModel {
  id: number;
  isNewQuery: boolean;
  chassisNumber: string;
  vehicle: string;
  tramerQueryDate: Date;
  totalDamageCount: number;
  totalDamagePrice: number;
  damages: DamageModel[];
}

export class DamageModel {
    damageDate: string;
    damageChangePart: boolean;
    damageDefinition: string;
    damageCurrency: string;
    damagePrice: number;
}
