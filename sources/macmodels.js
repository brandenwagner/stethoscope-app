const database = {
  'iPad1,1': 'iPad Wi-Fi/3G/GPS (Original/1st Gen)',
  'iPad2,1': 'iPad 2 (Wi-Fi Only)',
  'iPad2,2': 'iPad 2 (Wi-Fi/GSM/GPS)',
  'iPad2,3': 'iPad 2 (Wi-Fi/CDMA/GPS)',
  'iPad2,4': 'iPad 2 (Wi-Fi Only, iPad2,4)',
  'iPad3,1': 'iPad 3rd Gen (Wi-Fi Only)',
  'iPad3,3': 'iPad 3rd Gen (Wi-Fi/Cellular AT&T/GPS)',
  'iPad3,2': 'iPad 3rd Gen (Wi-Fi/Cellular Verizon/GPS)',
  'iPad3,4': 'iPad 4th Gen (Wi-Fi Only)',
  'iPad3,5': 'iPad 4th Gen (Wi-Fi/AT&T/GPS)',
  'iPad3,6': 'iPad 4th Gen (Wi-Fi/Verizon & Sprint/GPS)',
  'iPad2,5': 'iPad mini (Wi-Fi Only/1st Gen)',
  'iPad2,6': 'iPad mini (Wi-Fi/AT&T/GPS - 1st Gen)',
  'iPad2,7': 'iPad mini (Wi-Fi/VZ & Sprint/GPS - 1st Gen)',
  'iPad4,1': 'iPad Air (Wi-Fi Only)',
  'iPad4,2': 'iPad Air (Wi-Fi/Cellular)',
  'iPad4,3': 'iPad Air (Wi-Fi/TD-LTE - China)',
  'iPad4,4': 'iPad mini 2 (Retina/2nd Gen, Wi-Fi Only)',
  'iPad4,5': 'iPad mini 2 (Retina/2nd Gen, Wi-Fi/Cellular)',
  'iPad4,6': 'iPad mini 2 (Retina/2nd Gen, China)',
  'iPad5,3': 'iPad Air 2 (Wi-Fi Only)',
  'iPad5,4': 'iPad Air 2 (Wi-Fi/Cellular)',
  'iPad4,7': 'iPad mini 3 (Wi-Fi Only)',
  'iPad4,8': 'iPad mini 3 (Wi-Fi/Cellular)',
  'iPad4,9': 'iPad mini 3 (Wi-Fi/Cellular, China)',
  'iPad5,1': 'iPad mini 4 (Wi-Fi Only)',
  'iPad5,2': 'iPad mini 4 (Wi-Fi/Cellular)',
  'iPad6,7': 'iPad Pro 12.9-Inch (Wi-Fi Only)',
  'iPad6,8': 'iPad Pro 12.9-Inch (Wi-Fi/Cellular)',
  'iPad6,3': 'iPad Pro 9.7-Inch (Wi-Fi Only)',
  'iPad6,4': 'iPad Pro 9.7-Inch (Wi-Fi/Cellular)',
  'iPad6,11': 'iPad 9.7-Inch 5th Gen (Wi-Fi Only)',
  'iPad6,12': 'iPad 9.7-Inch 5th Gen (Wi-Fi/Cellular)',
  'iPad7,3': 'iPad Pro 10.5-Inch (Wi-Fi Only)',
  'iPad7,4': 'iPad Pro 10.5-Inch (Wi-Fi/Cellular)',
  'iPad7,1': 'iPad Pro 12.9-Inch (Wi-Fi Only - 2nd Gen)',
  'iPad7,2': 'iPad Pro 12.9-Inch (Wi-Fi/Cell - 2nd Gen)',
  'iPhone1,1': 'iPhone (Original/1st Gen/EDGE)',
  'iPhone1,2': 'iPhone 3G',
  'iPhone2,1': 'iPhone 3GS',
  'iPhone1,2*': 'iPhone 3G (China/No Wi-Fi)',
  'iPhone2,1*': 'iPhone 3GS (China/No Wi-Fi)',
  'iPhone3,1': 'iPhone 4 (GSM)',
  'iPhone3,2': 'iPhone 4 (GSM, Revision A)',
  'iPhone3,3': 'iPhone 4 (CDMA/Verizon/Sprint)',
  'iPhone4,1': 'iPhone 4S (4s*)',
  'iPhone4,1*': 'iPhone 4S (GSM China/WAPI)',
  'iPhone5,1': 'iPhone 5 (GSM/LTE/AWS/North America)',
  'iPhone5,2': 'iPhone 5 (CDMA China/UIM/WAPI)',
  'iPhone5,3': 'iPhone 5c (CDMA/US/Japan/A1456)',
  'iPhone5,4': 'iPhone 5c (China Mobile/A1516)',
  'iPhone6,1': 'iPhone 5s (CDMA/US/Japan/A1453)',
  'iPhone6,2': 'iPhone 5s (China Mobile/A1518)',
  'iPhone7,2': 'iPhone 6 (China Mobile/A1589)',
  'iPhone7,1': 'iPhone 6 Plus (China Mobile/A1593)',
  'iPhone8,1': 'iPhone 6s (China Mobile/A1691)',
  'iPhone8,2': 'iPhone 6s Plus (China Mobile/A1690)',
  'iPhone8,4': 'iPhone SE (China Mobile/A1724)',
  'iPhone9,1': 'iPhone 7 (China Mobile/A1780)',
  'iPhone9,3': 'iPhone 7 (AT&T/T-Mobile/Global/A1778)',
  'iPhone9,2': 'iPhone 7 Plus (China Mobile/A1786)',
  'iPhone9,4': 'iPhone 7 Plus (AT&T/T-Mobile/Global/A1784)',
  'iPhone10,1': 'iPhone 8 (Japan/A1906)',
  'iPhone10,4': 'iPhone 8 (AT&T/T-Mobile/Global/A1905)',
  'iPhone10,2': 'iPhone 8 Plus (Japan/A1898)',
  'iPhone10,5': 'iPhone 8 Plus (AT&T/T-Mobile/Global/A1897)',
  'iPhone10,3': 'iPhone X (Japan/A1902)',
  'iPhone10,6': 'iPhone X (AT&T/T-Mobile/Global/A1901)',
  'iPod1,1': 'iPod touch (Original/1st Gen)',
  'iPod2,1': 'iPod touch (2nd Gen/2009/8 GB)',
  'iPod3,1': 'iPod touch (3rd Gen/32 & 64 GB)',
  'iPod4,1': 'iPod touch (4th Gen, 2012)',
  'iPod5,1': 'iPod touch (5th Gen, 16 GB, 2014)',
  'iPod7,1': 'iPod touch (6th Gen, 2015)',
  'PowerMac4,4': 'eMac G4/1.0 (ATI)',
  'PowerMac6,4': 'eMac G4/1.42 (2005)',
  'PowerBook2,1': 'iBook G3/366 SE (Original/Clamshell)',
  'PowerBook2,2': 'iBook G3/466 SE (Firewire/Clamshell)',
  'PowerBook4,1': 'iBook G3/600 (Late 2001 - Tr)',
  'PowerBook4,2': 'iBook G3/600 14-Inch (Early 2002 - Tr)',
  'PowerBook4,3': 'iBook G3/900 14-Inch (Early 2003 - Op)',
  'PowerBook6,3': 'iBook G4/1.0 14-Inch (Original - Op)',
  'PowerBook6,5': 'iBook G4/1.33 14-Inch (Late 2004 - Op)',
  'PowerBook6,7': 'iBook G4/1.42 14-Inch (Mid-2005 - Op)',
  'iMac,1': 'iMac G3/333 (Fruit Colors)',
  'PowerMac2,1': 'iMac G3/400 DV SE (Slot Loading)',
  'PowerMac2,2': 'iMac G3/500 DV SE (Summer 2000)',
  'PowerMac4,1': 'iMac G3/700 SE (Summer 2001)',
  'PowerMac4,2': 'iMac G4/800 - X Only (Flat Panel)',
  'PowerMac4,5': 'iMac G4/800 17-Inch (Flat Panel)',
  'PowerMac6,1': 'iMac G4/1.0 17-Inch (Flat Panel)',
  'PowerMac6,3*': "iMac G4/1.0 15-Inch 'FP' (USB 2.0)",
  'PowerMac6,3': "iMac G4/1.25 20-Inch 'FP' (USB 2.0)",
  'PowerMac8,1': 'iMac G5/1.8 20-Inch',
  'PowerMac8,2': 'iMac G5/2.0 20-Inch (ALS)',
  'PowerMac12,1': 'iMac G5/2.1 20-Inch (iSight)',
  'iMac4,1': "iMac 'Core Duo' 2.0 20-Inch",
  'iMac4,2': "iMac 'Core Duo' 1.83 17-Inch (IG)",
  'iMac5,2': "iMac 'Core 2 Duo' 1.83 17-Inch (IG)",
  'iMac5,1': "iMac 'Core 2 Duo' 2.33 20-Inch",
  'iMac6,1': "iMac 'Core 2 Duo' 2.33 24-Inch",
  'iMac7,1': "iMac 'Core 2 Extreme' 2.8 24-Inch (Al)",
  'iMac8,1': "iMac 'Core 2 Duo' 3.06 24-Inch (Early 2008)",
  'iMac9,1': "iMac 'Core 2 Duo' 2.26 20-Inch (Mid-2009)",
  'iMac10,1': "iMac 'Core 2 Duo' 3.33 27-Inch (Late 2009)",
  'iMac11,1': "iMac 'Core i7' 2.8 27-Inch (Late 2009)",
  'iMac11,2': "iMac 'Core i5' 3.6 21.5-Inch (Mid-2010)",
  'iMac11,3': "iMac 'Core i7' 2.93 27-Inch (Mid-2010)",
  'iMac12,1': "iMac 'Core i3' 3.1 21.5-Inch (Late 2011)",
  'iMac12,2': "iMac 'Core i7' 3.4 27-Inch (Mid-2011)",
  'iMac13,1': "iMac 'Core i3' 3.3 21.5-Inch (Early 2013)",
  'iMac13,2': "iMac 'Core i7' 3.4 27-Inch (Late 2012)",
  'iMac14,1': "iMac 'Core i5' 2.7 21.5-Inch (Late 2013)",
  'iMac14,3': "iMac 'Core i7' 3.1 21.5-Inch (Late 2013)",
  'iMac14,2': "iMac 'Core i7' 3.5 27-Inch (Late 2013)",
  'iMac14,4': "iMac 'Core i5' 1.4 21.5-Inch (Mid-2014)",
  'iMac15,1': "iMac 'Core i5' 3.3 27-Inch (5K, Mid-2015)",
  'iMac16,1': "iMac 'Core i5' 1.6 21.5-Inch (Late 2015)",
  'iMac16,2': "iMac 'Core i7' 3.3 21.5-Inch (4K, Late 2015)",
  'iMac17,1': "iMac 'Core i7' 4.0 27-Inch (5K, Late 2015)",
  'iMac18,1': "iMac 'Core i5' 2.3 21.5-Inch (Mid-2017)",
  'iMac18,2': "iMac 'Core i7' 3.6 21.5-Inch (4K, Mid-2017)",
  'iMac18,3': "iMac 'Core i7' 4.2 27-Inch (5K, Mid-2017)",
  'iMacPro1,1': "iMac Pro '18-Core' 2.3 27-Inch (5K, Late 2017)",
  'PowerMac10,1': 'Mac mini G4/1.42',
  'PowerMac10,2': 'Mac mini G4/1.5',
  'Macmini1,1': "Mac mini 'Core Duo' 1.83",
  'Macmini2,1': "Mac mini 'Core 2 Duo' 2.0",
  'Macmini3,1': "Mac mini 'Core 2 Duo' 2.53 (Server)",
  'Macmini4,1': "Mac mini 'Core 2 Duo' 2.66 (Server)",
  'Macmini5,1': "Mac mini 'Core i5' 2.3 (Mid-2011)",
  'Macmini5,2': "Mac mini 'Core i7' 2.7 (Mid-2011)",
  'Macmini5,3': "Mac mini 'Core i7' 2.0 (Mid-2011/Server)",
  'Macmini6,1': "Mac mini 'Core i5' 2.5 (Late 2012)",
  'Macmini6,2': "Mac mini 'Core i7' 2.6 (Late 2012/Server)",
  'Macmini7,1': "Mac mini 'Core i7' 3.0 (Late 2014)",
  'MacPro1,1*': "Mac Pro 'Quad Core' 3.0 (Original)",
  'MacPro2,1': "Mac Pro 'Eight Core' 3.0 (2,1)",
  'MacPro3,1': "Mac Pro 'Eight Core' 3.2 (2008)",
  'MacPro4,1': "Mac Pro 'Eight Core' 2.93 (2009/Nehalem)",
  'MacPro5,1': "Mac Pro 'Twelve Core' 3.06 (Server 2012)",
  'MacPro6,1': "Mac Pro 'Twelve Core' 2.7 (Late 2013)",
  'N/A*': 'PowerBook G3 300 (PDQ - Late 1998)',
  'PowerMac1,1': 'Power Macintosh G3 450 (Blue & White)',
  'PowerMac3,1': 'Power Macintosh G4 350 (AGP)',
  'PowerMac3,3': 'Power Macintosh G4 500 DP (Gigabit)',
  'PowerMac3,4': 'Power Macintosh G4 733 (Digital Audio)',
  'PowerMac3,5': 'Power Macintosh G4 1.0 DP (QS 2002)',
  'PowerMac3,6': 'Power Macintosh G4 1.25 (MDD 2003)',
  'MacBook1,1': "MacBook 'Core Duo' 2.0 13' (Black)",
  'MacBook2,1': "MacBook 'Core 2 Duo' 2.16 13' (Black)",
  'MacBook3,1': "MacBook 'Core 2 Duo' 2.2 13' (Black-SR)",
  'MacBook4,1': "MacBook 'Core 2 Duo' 2.4 13' (Black-08)",
  'MacBook5,1': "MacBook 'Core 2 Duo' 2.4 13' (Unibody)",
  'MacBook5,2': "MacBook 'Core 2 Duo' 2.13 13' (White-09)",
  'MacBook6,1': "MacBook 'Core 2 Duo' 2.26 13' (Uni/Late 09)",
  'MacBook7,1': "MacBook 'Core 2 Duo' 2.4 13' (Mid-2010)",
  'MacBook8,1': "MacBook 'Core M' 1.3 12' (Early 2015)",
  'MacBook9,1': "MacBook 'Core m7' 1.3 12' (Early 2016)",
  'MacBook10,1': "MacBook 'Core i7' 1.4 12' (Mid-2017)",
  'MacBookAir1,1': "MacBook Air 'Core 2 Duo' 1.8 13' (Original)",
  'MacBookAir2,1': "MacBook Air 'Core 2 Duo' 2.13 13' (Mid-09)",
  'MacBookAir3,1': "MacBook Air 'Core 2 Duo' 1.6 11' (Late '10)",
  'MacBookAir3,2': "MacBook Air 'Core 2 Duo' 2.13 13' (Late '10)",
  'MacBookAir4,1': "MacBook Air 'Core i7' 1.8 11' (Mid-2011)",
  'MacBookAir4,2': "MacBook Air 'Core i5' 1.6 13' (Edu Only)",
  'MacBookAir5,1': "MacBook Air 'Core i7' 2.0 11' (Mid-2012)",
  'MacBookAir5,2': "MacBook Air 'Core i7' 2.0 13' (Mid-2012)",
  'MacBookAir6,1': "MacBook Air 'Core i7' 1.7 11' (Early 2014)",
  'MacBookAir6,2': "MacBook Air 'Core i7' 1.7 13' (Early 2014)",
  'MacBookAir7,1': "MacBook Air 'Core i7' 2.2 11' (Early 2015)",
  'MacBookAir7,2': "MacBook Air 'Core i7' 2.2 13' (Early 2015)",
  'MacBookPro1,1': "MacBook Pro 'Core Duo' 2.16 15'",
  'MacBookPro1,2': "MacBook Pro 'Core Duo' 2.16 17'",
  'MacBookPro2,2': "MacBook Pro 'Core 2 Duo' 2.33 15'",
  'MacBookPro2,1': "MacBook Pro 'Core 2 Duo' 2.33 17'",
  'MacBookPro3,1': "MacBook Pro 'Core 2 Duo' 2.6 17' (SR)",
  'MacBookPro4,1': "MacBook Pro 'Core 2 Duo' 2.6 17' (08)",
  'MacBookPro5,1': "MacBook Pro 'Core 2 Duo' 2.93 15' (Unibody)",
  'MacBookPro5,2': "MacBook Pro 'Core 2 Duo' 3.06 17' Mid-2009",
  'MacBookPro5,5': "MacBook Pro 'Core 2 Duo' 2.53 13' (SD/FW)",
  'MacBookPro5,4': "MacBook Pro 'Core 2 Duo' 2.53 15' (SD)",
  'MacBookPro5,3': "MacBook Pro 'Core 2 Duo' 3.06 15' (SD)",
  'MacBookPro7,1': "MacBook Pro 'Core 2 Duo' 2.66 13' Mid-2010",
  'MacBookPro6,2': "MacBook Pro 'Core i7' 2.8 15' Mid-2010",
  'MacBookPro6,1': "MacBook Pro 'Core i7' 2.8 17' Mid-2010",
  'MacBookPro8,1': "MacBook Pro 'Core i7' 2.8 13' Late 2011",
  'MacBookPro8,2': "MacBook Pro 'Core i7' 2.5 15' Late 2011",
  'MacBookPro8,3': "MacBook Pro 'Core i7' 2.5 17' Late 2011",
  'MacBookPro9,2': "MacBook Pro 'Core i7' 2.9 13' Mid-2012",
  'MacBookPro9,1': "MacBook Pro 'Core i7' 2.7 15' Mid-2012",
  'MacBookPro10,1': "MacBook Pro 'Core i7' 2.8 15' Early 2013",
  'MacBookPro10,2': "MacBook Pro 'Core i7' 3.0 13' Early 2013",
  'MacBookPro11,1': "MacBook Pro 'Core i7' 3.0 13' Mid-2014",
  'MacBookPro11,2': "MacBook Pro 'Core i7' 2.8 15' Mid-2014 (IG)",
  'MacBookPro11,3': "MacBook Pro 'Core i7' 2.8 15' Mid-2014 (DG)",
  'MacBookPro12,1': "MacBook Pro 'Core i7' 3.1 13' Early 2015",
  'MacBookPro11,4': "MacBook Pro 'Core i7' 2.8 15' Mid-2015 (IG)",
  'MacBookPro11,5': "MacBook Pro 'Core i7' 2.8 15' Mid-2015 (DG)",
  'MacBookPro13,1': "MacBook Pro 'Core i7' 2.4 13' Late 2016",
  'MacBookPro13,2': "MacBook Pro 'Core i7' 3.3 13' Touch/Late 2016",
  'MacBookPro13,3': "MacBook Pro 'Core i7' 2.9 15' Touch/Late 2016",
  'MacBookPro14,1': "MacBook Pro 'Core i7' 2.5 13' Mid-2017",
  'MacBookPro14,2': "MacBook Pro 'Core i7' 3.5 13' Touch/Mid-2017",
  'MacBookPro14,3': "MacBook Pro 'Core i7' 3.1 15' Touch/Mid-2017",
  'PowerMac1,2': 'Power Macintosh G4 350 (PCI)',
  'PowerMac5,1': 'Power Macintosh G4 500 Cube',
  'PowerMac7,2': 'Power Macintosh G5 1.8 DP (PCI-X)',
  'PowerMac7,3': 'Power Macintosh G5 2.7 DP (PCI-X)',
  'PowerMac9,1': 'Power Macintosh G5 1.8 (PCI)',
  'PowerMac11,2': "Power Macintosh G5 'Quad Core' (2.5)",
  'PowerBook1,1': 'PowerBook G3 400 (Bronze KB/Lombard)',
  'PowerBook3,1': 'PowerBook G3 500 (Firewire/Pismo)',
  'PowerBook3,2': 'PowerBook G4 500 (Original - Ti)',
  'PowerBook3,3': 'PowerBook G4 667 (Gigabit - Ti)',
  'PowerBook3,4': 'PowerBook G4 800 (DVI - Ti)',
  'PowerBook3,5': 'PowerBook G4 1.0 (Ti)',
  'PowerBook6,1': "PowerBook G4 867 12' (Al)",
  'PowerBook5,1': "PowerBook G4 1.0 17' (Al)",
  'PowerBook6,2': "PowerBook G4 1.0 12' (DVI - Al)",
  'PowerBook5,2': "PowerBook G4 1.25 15' (FW800 - Al)",
  'PowerBook5,3': "PowerBook G4 1.33 17' (Al)",
  'PowerBook6,4': "PowerBook G4 1.33 12' (Al)",
  'PowerBook5,4': "PowerBook G4 1.5 15' (Al)",
  'PowerBook5,5': "PowerBook G4 1.5 17' (Al)",
  'PowerBook6,8': "PowerBook G4 1.5 12' (Al)",
  'PowerBook5,6': "PowerBook G4 1.67 15' (Al)",
  'PowerBook5,7': "PowerBook G4 1.67 17' (Al)",
  'PowerBook5,8': "PowerBook G4 1.67 15' (DLSD/HR - Al)",
  'PowerBook5,9': "PowerBook G4 1.67 17' (DLSD/HR - Al)",
  'RackMac1,1': 'Xserve G4/1.0 DP',
  'RackMac1,2': 'Xserve G4/1.33 DP Cluster Node',
  'RackMac3,1': 'Xserve G5/2.3 DP Cluster Node (PCI-X)',
  'Xserve1,1': "Xserve Xeon 3.0 'Quad Core' (Late 2006)",
  'Xserve2,1': "Xserve Xeon 3.0 'Eight Core' (Early 2008)",
  'Xserve3,1': "Xserve Xeon Nehalem 2.93 'Eight Core'"
}

module.exports = function getFriendlyName (modelName) {
  const trimmedName = (modelName || '').trim()
  return database[trimmedName] || 'Unknown device'
}
