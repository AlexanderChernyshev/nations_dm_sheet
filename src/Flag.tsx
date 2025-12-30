export type Flag = {
  id: number;
  name: string;
  url: string;
};

export const unalignedFlag: Flag = {
  id: 1,
  name: "unaligned flag",
  url: "/unaligned_flag_dmsheet.svg",
};

export const flagsData: Flag[] = [
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
