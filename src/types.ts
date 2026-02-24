export type FlagInfo = {
  id: number;
  name: string;
  url: string;
};

export const unalignedFlag: FlagInfo = {
  id: 1,
  name: "unaligned flag",
  url: "/unaligned_flag_dmsheet.svg",
};

export const flagsData: FlagInfo[] = [
  unalignedFlag,
  {
    id: 2,
    name: "flag1",
    url: "/nations_dm_sheet_flags_01.svg",
  },
  {
    id: 3,
    name: "flag2",
    url: "/nations_dm_sheet_flags_02.svg",
  },
  {
    id: 4,
    name: "flag3",
    url: "/nations_dm_sheet_flags_03.svg",
  },
  {
    id: 5,
    name: "flag4",
    url: "/nations_dm_sheet_flags_04.svg",
  },
];

export type PopIconInfo = {
  id: number;
  name: string;
  emoji: string;
};

export const defaultPopIcon: PopIconInfo = {
  id: 1,
  name: "Human",
  emoji: "👤",
};

export const popIconsData: PopIconInfo[] = [
  defaultPopIcon,
  { id: 2, name: "Elf", emoji: "🧝" },
  { id: 3, name: "Dwarf", emoji: "🧔" },
  { id: 4, name: "Orc", emoji: "👹" },
  { id: 5, name: "Wizard", emoji: "🧙" },
  { id: 6, name: "Warrior", emoji: "⚔️" },
];
