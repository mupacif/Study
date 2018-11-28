# Tableaux 

```
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};

double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};

pointeurs 


type *var-nom;
var-nom = &addr;
int  *ptr = NULL;
```
## entête des fonctions recevant des tableaux
```
void fct (int t[10]);
void fct (int * t);
void fct (int t[]);
```
# Strings 
```
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
char greeting[] = "Hello";
```
copy s2 in s1 strcpy(s1, s2);
concatconcat s2 in s1 strcat(s1, s2);
lenght of s1 strlen(s1);
compare strcmp(s1, s2);
pointer to the first occurence strchr(s1, ch);
pointer to the first occurence strstr(s1, s2);

# Les pointeurs
```
 (*leff)++ ; //on change la valeur à l'adresse
 *t++ = nb;  // on change la valeur puis on incremente l'adresse du pointeur
 ```
 
# parcour pointeur
 ```
   for(  i = 0; i < leff ; i++)
           {  printf("Valeur No %d du Tableau : %d\n", i + 1, *t++);
             printf("Adresse de L'ELEMENT SUIVANT du tableau : %x\n",t);
             printf("Adresse du PARAM IDENTIFICATEUR' tableau : %x\n",&t); 
             }
             
```             
# parcour tabvleau de caractère
```
   while(*ptr!='\0')
    printf('%d',*ptr++)
     
 init string
har S1 [N], S2 [] = "coucou", S3 [3] = "truc", S4 [40],* S5;
  S5 = "bonjour";
  ```
  
  
  
  
# parcour tableau
```
  int t[]={1,2,3,75,68,95},*ptr;
  ptr=t;
    
  for(ptr=t;ptr<t+6;ptr++)
    printf("%d-",*ptr);

```

```
for (i=0 ; i<10 ; i++) t[i] = 1 ;
 for (i=0 ; i<10 ; i++, t++) *t = 1 ;

 for (i=0 ; i<10 ; i++) *(t+i) = 1 ;
 for (i=0 ; i<10 ; i++) t[i] = 1 
```
# fonction sur les chaiens de caractères 

```
gets(carPtr); 
puts(carPtr);
strlen(str);
```
## parcour de chaine 
 ```
  char * adr ; bonjour
 adr = "bonjour" ;
 while (*adr) //parce que \0 => 0 (donc faux en c)
 { printf ("%c", *adr) ;
 adr++ ;
 } 
 ```
 ## tableau de string 
 
  ```
char * jour[7] = { "lundi", "mardi", "mercredi", "jeudi",
 "vendredi", "samedi", "dimanche" } ;
 ```
# Les pointeurs génériques
type quelconque 
```
void raz (void * adr, int n)
 {
 int i ;
  char * ad = adr ;
 for (i=0 ; i<n ; i++, ad++) *ad = 0 ; 
 }
 ```
 
 # pointeur  de fonctions 
 ```
 int fct1 (double, int) ;
 adf = fct1 ;
 fct1 (5.35, 4) ;
 
 float integ ( float(*f)(float))
 int (* adf) (double, int) ;
 ```
 
# fichiers 
 ```
#include <stdio.h>
main()
{
 char nomfich[21] ;
 int n ;
 FILE * sortie ;
 printf ("nom du fichier à créer : ") ;
 scanf ("%20s", nomfich) ;
 sortie = fopen (nomfich, "w") ;

 do { printf ("donnez un entier : ") ;
 scanf ("%d", &n) ;
 if (n) fwrite (&n, sizeof(int), 1, sortie) ;
 }
 while (n) ;

 fclose (sortie) ;
}


#include <stdio.h>
main()
{
 char nomfich[21] ;
 int n ;
 FILE * entree ;
 printf ("nom du fichier à lister : ") ;
 scanf ("%20s", nomfich) ;
 entree = fopen (nomfich, "r") ;
 while ( fread (&n, sizeof(int), 1, entree), ! feof(entree) )
 printf ("\n%d", n) ;
 fclose (entree) ;
}

 ```
 
- r : lecture seulement ; le fichier doit exister.
- w : écriture seulement. Si le fichier n’existe pas, il est créé. S’il existe, son (ancien) contenu est
perdu.
- a : écriture en fin de fichier (append). Si le fichier existe déjà, il sera étendu. S’il n’existe pas,
il sera créé – on se ramène alors au mode w.
- r+ : mise à jour (lecture et écriture). Le fichier doit exister. Notez qu’alors il n’est pas possible
de réaliser une lecture à la suite d’une écriture ou une écriture à la suite d’une lecture, sans
positionner le pointeur de fichier par fseek. Il est toutefois possible d’enchaîner plusieurs
lectures ou écritures consécutives (de façon séquentielle).
- w+ : création pour mise à jour. Si le fichier existe, son (ancien) contenu sera détruit. S’il
n’existe pas, il sera créé. Notez que l’on obtiendrait un mode comparable à w+ en ouvrant un
fichier vide (mais existant) en mode r+.
- a+ : extension et mise à jour. Si le fichier n’existe pas, il sera créé. S’il existe, le pointeur sera
positionné en fin de fichier


# malloc realloc calloc 
 ```
long * adr ;
 .....
 adr = malloc (100 * sizeof(long)) ;
 
 free (adr) ;
  ```
 ## La fonction : calloc
 ``` 
void * calloc ( size_t nb_blocs, size_t taille ) (stdlib.h)
 ```
alloue l’emplacement nécessaire à nb_blocs consécutifs, ayant chacun une taille de taille


## La fonction : realloc
 ```
void * realloc (void * pointeur, size_t taille ) (stdlib.h)
 ```
permet de modifier la taille d’une zone préalablement allouée (par malloc, calloc ou
realloc).
octets


# preprocesseurs 
 ```
#define DOUBLE(x) ((x)+(x))
 ...
DOUBLE(a)/b
DOUBLE(x+2*y)
DOUBLE(x++)
Le texte généré par le préprocesseur sera :
((a)+(a))/b
((x+2*y)+(x+2*y))

 ```
 
 ## compilation alteranative 
  ```
 #define CODE 1
 .....
#if CODE == 1
 instructions 1
#endif
#if CODE == 2
 instructions 2
#endif
Ici, ce sont les 
 ```

# infos

scanf : utilise le tempon standard

sscanf;


![capture](https://user-images.githubusercontent.com/6844928/49175535-14af6000-f349-11e8-961d-c5c05ffddf2c.PNG)
