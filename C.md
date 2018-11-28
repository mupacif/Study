# Tableaux 

```
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};

double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};

pointeurs 


type *var-nom;
var-nom = &addr;
int  *ptr = NULL;
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

# fonction sur les chaiens de caractères 

```
gets(carPtr); 
puts(carPtr);
```
