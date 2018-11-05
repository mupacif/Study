# ex 1
# ab = ["pain","orange","eau","fruit","legume"]
# for i in range(len(ab)): 
#     print("indice:",i,"->",ab[i])

# ex 2

# for idx,val in enumerate(ab): 
#     print("indice:",idx,"->",val)

# # ex 3??
# # ex 4 
# tab_a = [15,20,5,14,1,0,19,26,4,6,5]
# tab_b = [3,26,18,3,7,6,9,20,8,1,23]

# tab_c = [max(tab_a[x],tab_b[x]) for x in range(11)]
# print("les plus grands sont", tab_c)

# ex 5 

# serie_a = [1,5,1,6,8,4,5,9,5,6,1,1,4,7,6,2,5,6,0,0,7,8,5,6,1,2]

# print(serie_a)
# print(sorted(serie_a))
# for i in range(10):
#     print(i," apparait:",serie_a.count(i))


# STRINGS 

# exo 1
# text = "avec python je progresse vite en programmation."
# print(text.upper())

# print(text.split(" "))

# print("-".join(text.split(" ")))


# exo 2
# chaine = "abcdefghijklmnopqrstuvwxyz"

# print(chaine[:6])
# print(chaine[13:])
# print(chaine[:10])
# # chaine2 = ''.join(chaine[x] for x in range(len(chaine)) if x%2==0)
# print(chaine[::2])
# # print(''.join(chaine[x] for x in range(len(chaine)) if x%2!=0))
# print(chaine[1:-1:2])
# # print(chaine2[:5])
# # print("".join(reversed(list(chaine))))
# print(chaine[::-1])


# exo 3
tab_car = ['p', 'y', 't', 'h', 'o', 'n', ' ', 'e', 's', 't', ' ', 'u', 'n', ' ', 's', 'u', 'p', 'e', 'r', ' ', 'l', 'a', 'n',
'g', 'a', 'g', 'e']


# for c in tab_car:
#     phrase += c

# print(phrase)

# ex 4

# print("".join(tab_car))
import string 
tab_flg = [15, 21, 10, 16, 90, 25, 34, 29, 17, 0, 23, 88, 1, 28, 88, 16, 27, 3, 10, 29, 92]

tabout = ''.join([string.printable[x] for x in tab_flg])
print(tabout)