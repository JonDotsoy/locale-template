// Generated by data-set/create-query-dataset.ts
// Do not edit this file.

export type zones = `${1|2|3|4|5|6|7|8|9}`;
export type DialCountryCode = zones | `${zones}${number}`;
export type ISO31661Alpha2 = string;
export type MapCodes = [
  Dial: DialCountryCode,
  ISO31661Alpha2: ISO31661Alpha2,
];

export const cCodes: MapCodes[] = [
  [ '886', 'TW' ],  [ '93', 'AF' ],   [ '355', 'AL' ],  [ '213', 'DZ' ],
  [ '1684', 'AS' ], [ '376', 'AD' ],  [ '244', 'AO' ],  [ '1264', 'AI' ],
  [ '672', 'AQ' ],  [ '1268', 'AG' ], [ '54', 'AR' ],   [ '374', 'AM' ],
  [ '297', 'AW' ],  [ '61', 'AU' ],   [ '43', 'AT' ],   [ '994', 'AZ' ],
  [ '1242', 'BS' ], [ '973', 'BH' ],  [ '880', 'BD' ],  [ '1246', 'BB' ],
  [ '375', 'BY' ],  [ '32', 'BE' ],   [ '501', 'BZ' ],  [ '229', 'BJ' ],
  [ '1441', 'BM' ], [ '975', 'BT' ],  [ '591', 'BO' ],  [ '599', 'BQ' ],
  [ '387', 'BA' ],  [ '267', 'BW' ],  [ '47', 'BV' ],   [ '55', 'BR' ],
  [ '246', 'IO' ],  [ '1284', 'VG' ], [ '673', 'BN' ],  [ '359', 'BG' ],
  [ '226', 'BF' ],  [ '257', 'BI' ],  [ '238', 'CV' ],  [ '855', 'KH' ],
  [ '237', 'CM' ],  [ '1', 'CA' ],    [ '1345', 'KY' ], [ '236', 'CF' ],
  [ '235', 'TD' ],  [ '56', 'CL' ],   [ '86', 'CN' ],   [ '852', 'HK' ],
  [ '853', 'MO' ],  [ '61', 'CX' ],   [ '61', 'CC' ],   [ '57', 'CO' ],
  [ '269', 'KM' ],  [ '242', 'CG' ],  [ '682', 'CK' ],  [ '506', 'CR' ],
  [ '385', 'HR' ],  [ '53', 'CU' ],   [ '599', 'CW' ],  [ '357', 'CY' ],
  [ '420', 'CZ' ],  [ '225', 'CI' ],  [ '850', 'KP' ],  [ '243', 'CD' ],
  [ '45', 'DK' ],   [ '253', 'DJ' ],  [ '1767', 'DM' ], [ '1809', 'DO' ],
  [ '1829', 'DO' ], [ '1849', 'DO' ], [ '593', 'EC' ],  [ '20', 'EG' ],
  [ '503', 'SV' ],  [ '240', 'GQ' ],  [ '291', 'ER' ],  [ '372', 'EE' ],
  [ '268', 'SZ' ],  [ '251', 'ET' ],  [ '500', 'FK' ],  [ '298', 'FO' ],
  [ '679', 'FJ' ],  [ '358', 'FI' ],  [ '33', 'FR' ],   [ '594', 'GF' ],
  [ '689', 'PF' ],  [ '262', 'TF' ],  [ '241', 'GA' ],  [ '220', 'GM' ],
  [ '995', 'GE' ],  [ '49', 'DE' ],   [ '233', 'GH' ],  [ '350', 'GI' ],
  [ '30', 'GR' ],   [ '299', 'GL' ],  [ '1473', 'GD' ], [ '590', 'GP' ],
  [ '1671', 'GU' ], [ '502', 'GT' ],  [ '44', 'GG' ],   [ '224', 'GN' ],
  [ '245', 'GW' ],  [ '592', 'GY' ],  [ '509', 'HT' ],  [ '672', 'HM' ],
  [ '3906', 'VA' ], [ '504', 'HN' ],  [ '36', 'HU' ],   [ '354', 'IS' ],
  [ '91', 'IN' ],   [ '62', 'ID' ],   [ '98', 'IR' ],   [ '964', 'IQ' ],
  [ '353', 'IE' ],  [ '44', 'IM' ],   [ '972', 'IL' ],  [ '39', 'IT' ],
  [ '1876', 'JM' ], [ '81', 'JP' ],   [ '44', 'JE' ],   [ '962', 'JO' ],
  [ '7', 'KZ' ],    [ '254', 'KE' ],  [ '686', 'KI' ],  [ '965', 'KW' ],
  [ '996', 'KG' ],  [ '856', 'LA' ],  [ '371', 'LV' ],  [ '961', 'LB' ],
  [ '266', 'LS' ],  [ '231', 'LR' ],  [ '218', 'LY' ],  [ '423', 'LI' ],
  [ '370', 'LT' ],  [ '352', 'LU' ],  [ '261', 'MG' ],  [ '265', 'MW' ],
  [ '60', 'MY' ],   [ '960', 'MV' ],  [ '223', 'ML' ],  [ '356', 'MT' ],
  [ '692', 'MH' ],  [ '596', 'MQ' ],  [ '222', 'MR' ],  [ '230', 'MU' ],
  [ '262', 'YT' ],  [ '52', 'MX' ],   [ '691', 'FM' ],  [ '377', 'MC' ],
  [ '976', 'MN' ],  [ '382', 'ME' ],  [ '1664', 'MS' ], [ '212', 'MA' ],
  [ '258', 'MZ' ],  [ '95', 'MM' ],   [ '264', 'NA' ],  [ '674', 'NR' ],
  [ '977', 'NP' ],  [ '31', 'NL' ],   [ '687', 'NC' ],  [ '64', 'NZ' ],
  [ '505', 'NI' ],  [ '227', 'NE' ],  [ '234', 'NG' ],  [ '683', 'NU' ],
  [ '672', 'NF' ],  [ '1670', 'MP' ], [ '47', 'NO' ],   [ '968', 'OM' ],
  [ '92', 'PK' ],   [ '680', 'PW' ],  [ '507', 'PA' ],  [ '675', 'PG' ],
  [ '595', 'PY' ],  [ '51', 'PE' ],   [ '63', 'PH' ],   [ '870', 'PN' ],
  [ '48', 'PL' ],   [ '351', 'PT' ],  [ '1', 'PR' ],    [ '974', 'QA' ],
  [ '82', 'KR' ],   [ '373', 'MD' ],  [ '40', 'RO' ],   [ '7', 'RU' ],
  [ '250', 'RW' ],  [ '262', 'RE' ],  [ '590', 'BL' ],  [ '290', 'SH' ],
  [ '1869', 'KN' ], [ '1758', 'LC' ], [ '590', 'MF' ],  [ '508', 'PM' ],
  [ '1784', 'VC' ], [ '685', 'WS' ],  [ '378', 'SM' ],  [ '239', 'ST' ],
  [ '966', 'SA' ],  [ '221', 'SN' ],  [ '381', 'RS' ],  [ '248', 'SC' ],
  [ '232', 'SL' ],  [ '65', 'SG' ],   [ '1721', 'SX' ], [ '421', 'SK' ],
  [ '386', 'SI' ],  [ '677', 'SB' ],  [ '252', 'SO' ],  [ '27', 'ZA' ],
  [ '500', 'GS' ],  [ '211', 'SS' ],  [ '34', 'ES' ],   [ '94', 'LK' ],
  [ '970', 'PS' ],  [ '249', 'SD' ],  [ '597', 'SR' ],  [ '47', 'SJ' ],
  [ '46', 'SE' ],   [ '41', 'CH' ],   [ '963', 'SY' ],  [ '992', 'TJ' ],
  [ '66', 'TH' ],   [ '389', 'MK' ],  [ '670', 'TL' ],  [ '228', 'TG' ],
  [ '690', 'TK' ],  [ '676', 'TO' ],  [ '1868', 'TT' ], [ '216', 'TN' ],
  [ '90', 'TR' ],   [ '993', 'TM' ],  [ '1649', 'TC' ], [ '688', 'TV' ],
  [ '256', 'UG' ],  [ '380', 'UA' ],  [ '971', 'AE' ],  [ '44', 'GB' ],
  [ '255', 'TZ' ],  [ '1340', 'VI' ], [ '1', 'US' ],    [ '598', 'UY' ],
  [ '998', 'UZ' ],  [ '678', 'VU' ],  [ '58', 'VE' ],   [ '84', 'VN' ],
  [ '681', 'WF' ],  [ '212', 'EH' ],  [ '967', 'YE' ],  [ '260', 'ZM' ],
  [ '263', 'ZW' ],  [ '358', 'AX' ]
];

export const selectDialCountryCodelByISO31661Alpha2 = (iso31661Alpha2ToFind: string) => cCodes.find(([_, iso31661Alpha2]) => iso31661Alpha2 === iso31661Alpha2ToFind)?.[0];

export const selectISO31661Alpha2ByDialCountryCode = (dialToFind: string) => cCodes.find(([dial]) => dial === dialToFind)?.[1];

export const selectCCodeByPhoneNumber = (phoneNumber: string) => {
  for (const lenDial of [4, 3, 2, 1]) {
    const prefixPhone = phoneNumber.substring(0, lenDial);
    const region = selectISO31661Alpha2ByDialCountryCode(prefixPhone);
    if (region) return [prefixPhone, region] as const;
  }
  return null;
}

