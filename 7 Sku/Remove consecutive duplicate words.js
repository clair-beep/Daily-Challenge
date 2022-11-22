const removeConsecutiveDuplicates = s => s.split(" ").filter((w, i, a) => w != a[i -1]).join(" ")
