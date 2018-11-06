# 1.find_information.py

# import os


# print("User:",end="")
# os.system("echo %username%")
# print("Information de la machine:",end="")
# os.system("hostname")
# print("OS:",end="")
# os.system("uname -s")
# print("Shell:",end="")
# os.system("")

# 2.open_and _read.py
# f = open("ficheir_texte.txt","r")
# for line in f:
#     print(line)
# f.close()

# 3.write_step_one.py 
# f = open("txt_one.txt.txt","w+")
# f.write("python automatise et stocke mes tâches.")
# f.close()

# 4.write_step_two.py
# f = open("txt_two.txt","w+")
# for i in range(5):
#     f.write("python automatise et stocke mes tâches.")
# f.close()

#5.fichier_with.py
# with open("txt_with.txt","w+") as f:
# for i in range(5):
#     f.write("python automatise et stocke mes tâches.")
# f.close()

# # 6.creation_dossier.py
# import os
# os.system("mkdir dossier_A&&chdir dossier_A&&mkdir dossier_0 dossier_1")


# 7.renommer_dossier.py

# import os
# os.system("mkdir dossier_B&&chdir dossier_B\
#             &&mkdir dossier_0 dossier_1\
#             &&mv dossier_1 dossier_test\
#             &&rmdir dossier_0")


# 8.créer_arborescence.py
# import os
# os.system("mkdir os_test\ss_dossier_A\
#                     os_test\ss_dossier_B\
#                     os_test\ss_dossier_C")
# for i in ["A","B","C"]:
#     for j in ["A","B"]:
#         name = "os_test/ss_dossier_"+i+"/fichier_"+j+".txt"
#         print(name)
#         with open(name,"w+") as f:
#             f.write("contenu_fichier_"+j)
