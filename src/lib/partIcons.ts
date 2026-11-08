import {
  Boxes,
  CircleDot,
  Cog,
  Disc3,
  Fan,
  Grid3x3,
  Hammer,
  Layers,
  Scissors,
  Wrench,
} from "lucide-react";

/** Pick a lucide icon that matches the part family. */
export function partIcon(item: string) {
  const name = item.toLowerCase();

  if (/hammer|crusher/.test(name)) return Hammer;
  if (/bearing|hub/.test(name)) return CircleDot;
  if (/jaali|sieve|screen|mesh/.test(name)) return Grid3x3;
  if (/impeller|fan/.test(name)) return Fan;
  if (/casting|housing/.test(name)) return Boxes;
  if (/tine|blade|liner|chute/.test(name)) return Layers;
  if (/cutter|shear/.test(name)) return Scissors;
  if (/drum|beater|concave/.test(name)) return Disc3;
  if (/shaft|pulley|belt|coupling|gear|sleeve|drive/.test(name)) return Cog;

  return Wrench;
}
