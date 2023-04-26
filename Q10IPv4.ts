function isValidIPv4Address(ipAddress: string): boolean {
    // Split  IP string into an array of 4 numbers
    const octets: string[] = ipAddress.split('.');
  
    // if IP address has exactly 4 octets or not
    if (octets.length !== 4) {
      return false;
    }
  
    //  octet is a valid number between 0 and 255
    for (let i = 0; i < octets.length; i++) {
      const octet = parseInt(octets[i], 10);
  
      if (isNaN(octet) || octet < 0 || octet > 255 || octet.toString() !== octets[i]) {
        return (false) ; // if any one condition gets is satisfied it'll return false 
        
      }
    }
//    console.log(ipAddress)

    // If everything true, the IP address is valid
    return true;
  }
  
  const ip1 = "192.128.0.255"
  const ip2 = "01.128.0.255"
  const ip3 = "29.128.0.255"


console.log(isValidIPv4Address(ip1));  
console.log(isValidIPv4Address(ip2));
console.log(isValidIPv4Address(ip3));
