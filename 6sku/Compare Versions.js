//Solution
function compareVersions(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    const k = Math.min(version1.length, version2.length);
    for (let i = 0; i < k; ++ i) {
        version1[i] = parseInt(version1[i], 10);
        version2[i] = parseInt(version2[i], 10);
        if (version1[i] > version2[i]) return true;
        if (version1[i] < version2[i]) return false;        
    }
    return version1.length == version2.length ?true: (version1.length < version2.length ? false : true);
  }
// alternative 

function compareVersions (version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')

    while (version1.length && version2.length) {
      const ver1 = Number(version1.shift())
      const ver2 = Number(version2.shift())
      
      if (ver1 !== ver2) {
        return ver1 > ver2
      }
    }
    
    return version2.length === 0
}