import jobs from "../assets/data/jobs.json";
import slots from "../assets/data/slots.json";

const intToBin = (int) => {
  return (int >>> 0).toString(2);
};

export function getArmorSlot(slotID) {
  const bitMap = [...intToBin(slotID).toString()];
  const bitMapLength = bitMap.length;
  let armorName = ''

  console.log(bitMap,bitMapLength,slotID)

  bitMap.forEach((bit, index) => {
    console.log(bit)
    if (bit === "1") {
      armorName = slots[bitMapLength - 1 - index].en;
      console.log(slots[bitMapLength - 1 - index].en)
    }
  });
  // console.log(armorName)
  return armorName
}
