import StatModel from "./models/stat";

async function go () {
  const [row, created] = await StatModel.findCreateFind<StatModel>({
    where: {id: 1, statDate: new Date(), statName: "score"},
    defaults: {statValue: 50}
  });
}