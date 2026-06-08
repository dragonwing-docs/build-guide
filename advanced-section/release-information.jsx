export const firmware_chipsets = [
  {
    label: "QCS6490",
    description: "Qualcomm® RB3 Gen 2 Core Development Kit",
    firmware_build_supported: true,
    qsc_cli_supported: true,
  },
  {
    label: "QCS5430",
    description: "Qualcomm® RB3 Gen 2 Lite Core Development Kit",
    firmware_build_supported: true,
    qsc_cli_supported: true,
  },
  {
    label: "QCS9075",
    description: "Qualcomm® IQ-9075 EVK",
    firmware_build_supported: true,
    qsc_cli_supported: true,
  },
  {
    label: "QCS8300",
    description: "Qualcomm® IQ-8275 EVK",
    firmware_build_supported: true,
    qsc_cli_supported: true,
  },
  {
    label: "QCS615",
    description: "Qualcomm® IQ-615 EVK",
    firmware_build_supported: true,
    qsc_cli_supported: true,
  },
];

export const qsc_release_parameters = [
  {
    product: "QCM6490.LE.2.0",
    release: "r00125.1",
    images: ["ADSP.HT.5.5.c8", "CDSP.HT.2.5.c3", "AOP.HO.3.6", "BOOT.MXF.1.0.c1", "TZ.XF.5.29"],
  },
  {
    product: "QCS9100.LE.2.0",
    release: "r00125.1",
    images: ["DSP.AT.1.0.1", "AOP.HO.3.6.1", "BOOT.MXF.1.0.c1", "TZ.XF.5.29.1"],
  },
  {
    product: "QCS8300.LE.2.0",
    release: "r00125.1",
    images: ["DSP.AT.1.0.1", "AOP.HO.3.6.1", "BOOT.MXF.1.0.c1", "TZ.XF.5.29.1"],
  },
  {
    product: "QCS615.LE.2.0",
    release: "r00125.1",
    images: ["BOOT.MXF.1.0.c1", "AOP.HO.3.6.2", "TZ.XF.5.29.1", "ADSP.VT.5.2.c6", "CDSP.VT.2.2.c4"],
  },
];

export const release_tags = [
  { label: "meta-qcom-release-tag", identifier: "qli-2.0" },
  { label: "meta-qcom-extras-release-tag", identifier: "qli-2.0" },
  { label: "firmware-release-tag", identifier: "r.2.0_00006.0" },
];
