# print('hahah')
# b=0
# while b < 5:
#     print(b)
#     b+=1

# def chaine(ch):
#     retour=[]
#     for car in ch:
#         retour.append(car)
#     return retour

# print(list(chaine("hahaha")))
# ex 1
# nom = "paci"
# prenom = "fique"
# age=10
# print(nom,prenom,age)

# ex2
# a=10
# b=5

# print("addition ",a+b)
# print("soustration {}".format(a-b))
# print("muliplication {a:5d}".format(a=a-b))
# print("muliplication 2 {1:5d}".format(a-b))
# print("division %d"%(a/b))


# ex 3

# a=5
# b=23
# if a > b: 
#     print("{a} plus grand que {b}".format(a=a,b=b))
# else:
#     print("{a} nest pas plus grand que {b}".format(a=a,b=b))


#ex 3
# a = "a"
# x= "x"
# u="u"

# if type(a) is str:
#     print("string")

# if a in "haha":
#     print("a est dans hahah")
# else:
#     print("pas de a dans haha")


# ex 4
# test = "test" 
# chaine="blablablablablablabla"
# if len(chaine) > 8 : 
#     print("mot passé est correct")
# else:
#     print("mo de passe trop petit")


# ex 5

# chaine = "blablabla"

# r_one = [x for x in range(20)]
# r_two = list(range(5,30))
# r_three = list(range(10,20,2))
# r_four=list(range(-20,1))
# taille = int(input('taille '))
# r_five = list(range(taille))
# print(r_five)


# ex 6

# for i in range(1,102):
#     print(i, "je dois apprendre python pour pegresser en sécu")


# ex 7
# taille = 5
# for i in range(taille):
#     print("\n", end="")
#     for j in range(taille):
#       print("#", end="")

# # ex 8

# taille = 5
# for i in range(taille):
#     print("\n", end="")
#     for j in range(taille):
#         if i == 0 or j == 0 or i == taille-1 or j == taille-1 :
#             print("#", end="")
#         else:
#             print(" ", end="")

# ex 9
i=0
taille = 5
while i < taille:
    print("\n", end="")
    for j in range(taille):
        print("#", end="")
    i+=1


    