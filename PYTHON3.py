# #4 renvoie_str.py
# def return_str(chaine):
#     return chaine


# print(return_str("hahah"))


# #5 renvoie_int.py
# def return_doubkle(nb):
#     return nb*2

# #6 renvoie_bool.py
# def return_bool(nb):
#     return type(nb) is int

# # 1.saisie_user.py
# import string
# car = input("entrez un qqchz")
# if all([c in string.digits for c in car]): 
#     print('chiffre')
# elif all([c in string.ascii_letters for c in car]):
#      if len(car) is 1 :
#           print("lettre")
#      else:
#          print("chaine de car")
# else:
#     print("autre chose")

# 2.saisie_user_evolution.py
# import string
# car = input("entrez un qqchz ")

# print(sum([car.count(c) for c in string.ascii_letters]),"lettre", end=",")
# print(sum([car.count(c) for c in string.digits]),"chiffres", end=",")
# print(sum([car.count(c) for c in string.punctuation]),"signe de ponctuations")


# 3.begin_to_play.py
import sys
c = ""
while True:
    c = input("C pour Continuer\nQ pour Quitter")
    print("votre choix->",c)
    if c == 'Q':
        sys.exit(0)

