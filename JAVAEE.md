JAVAEE

# SERVLET 

package com.sdzee.servlets;

import javax.servlet.http.HttpServlet;

public class Test extends HttpServlet {
    	public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
			response.setContentType("text/html");
            response.setCharacterEncoding( "UTF-8" );
            PrintWriter out = response.getWriter();
            out.println("hello");
            this.getServletContext().getRequestDispatcher( "/WEB-INF/test.jsp" ).forward( request, response );

            public void doGet( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException{
                
            String paramAuteur = request.getParameter( "auteur" );
            String message = "Transmission de variables : OK ! " + paramAuteur;

            String message = "Transmission de variables : OK !";
            request.setAttribute( "test", message );
            this.getServletContext().getRequestDispatcher( "/WEB-INF/test.jsp" ).forward( request, response );
        }
	}


                <% 
            String attribut = (String) request.getAttribute("test");
            out.println( attribut );
            %>

    
}

# web.xml

<?xml version="1.0" encoding="UTF-8"?>
<web-app 
  xmlns="http://java.sun.com/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
  version="3.0">

  <servlet>
	<servlet-name>Test</servlet-name>
	<servlet-class>com.sdzee.servlets.Test</servlet-class>

	<description>Ma première servlet de test.</description>

	<init-param>
		<param-name>auteur</param-name> 
		<param-value>Coyote</param-value> 
	</init-param>

	<load-on-startup>1</load-on-startup>
</servlet>

	<servlet-mapping>
		<servlet-name>Test</servlet-name>
		<url-pattern>/toto</url-pattern>
	</servlet-mapping>

</web-app>

#javabean 

Un bean :

doit être une classe publique ;

doit avoir au moins un constructeur par défaut, public et sans paramètres. Java l'ajoutera de lui-même si aucun constructeur n'est explicité ;

peut implémenter l'interface Serializable, il devient ainsi persistant et son état peut être sauvegardé ;

ne doit pas avoir de champs publics ;

peut définir des propriétés (des champs non publics), qui doivent être accessibles via des méthodes publiques getter et setter, suivant des règles de nommage.

# jsp 
Les directives JSP permettent :

d'importer un package ;

d'inclure d'autres pages JSP ;

d'inclure des bibliothèques de balises (nous y reviendrons dans un prochain chapitre) ;

de définir des propriétés et informations relatives à une page JSP.

//taglib, page et include

<%@ page import="java.util.List, java.util.Date"  %>


<%-- Et il est impossible d'inclure une page externe comme ci-dessous :  --%>
<% request.getRequestDispatcher( "page.jsp" ).include( request, response ); %>


# portée 

page (JSP seulement) : les objets dans cette portée sont uniquement accessibles dans la page JSP en question ;

requête : les objets dans cette portée sont uniquement accessibles durant l'existence de la requête en cours ;

session : les objets dans cette portée sont accessibles durant l'existence de la session en cours ;

application : les objets dans cette portée sont accessibles durant toute l'existence de l'application.

# actions standard

include
useBean:<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote" />
getProperty:<jsp:getProperty name="coyote" property="prenom" />
forward: //<%= coyote.getPrenom() %>


<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote" scope="request" />
cette action permet de stocker un bean (nouveau ou existant) dans une variable,

<jsp:useBean id="coyote" class="com.sdzee.beans.Coyote">
   <%-- Ici, vous pouvez placer ce que vous voulez : 
        définir des propriétés, créer d'autres objets, etc. --%>
   <p>Nouveau bean !</p>
</jsp:useBean>


<jsp:setProperty name="coyote" property="prenom" value="Wile E." />
<% coyote.setPrenom("Wile E."); %>


<%-- Le forwarding vers une page de l'application fonctionne par URL relative : --%>
<jsp:forward page="/page.jsp" />

<%-- Son équivalent en code Java  est : --%>
<% request.getRequestDispatcher( "/page.jsp" ).forward( request, response ); %>

# EL

${12 lt 8}

    <body>
    <p>
        <% 
    	/* Création d'une liste de légumes et insertion de quatre éléments */
    	java.util.List<String> legumes = new java.util.ArrayList<String>();
        legumes.add( "poireau" );
        legumes.add( "haricot" );
        legumes.add( "carotte");
        legumes.add( "pomme de terre" );
        request.setAttribute( "legumes" , legumes );
        %>

        <!-- Les quatre syntaxes suivantes retournent le deuxième élément de la liste de légumes  -->
        ${ legumes.get(1) }<br />
        ${ legumes[1] }<br />
        ${ legumes['1'] }<br />
        ${ legumes["1"] }<br />
    </p>
    </body>
<% 
        java.util.Map<String,Integer> desserts = new java.util.HashMap<String, Integer>();
        desserts.put("cookies", 8);
                request.setAttribute("desserts" , desserts);
        %>
    maps :

            ${ desserts.cookies }<br />
        ${ desserts.get("cookies") }<br />
        ${ desserts['cookies'] }<br />
        ${ desserts["cookies"] }<br />


# desactiver EL
<%@ page isELIgnored ="true" %>

ou

<jsp-config>
    <jsp-property-group>
        <url-pattern>*.jsp</url-pattern>
        <el-ignored>true</el-ignored>
    </jsp-property-group>
</jsp-config>


# portés 

## JSP 
pageContext

Objet contenant des informations sur 
l'environnement du serveur.

## Portées

pageScope

Une Map qui associe les noms et valeurs des attributs 
ayant pour portée la page.

requestScope

Une Map  qui associe les noms et valeurs des attributs
ayant pour portée la requête.

sessionScope

Une Map  qui associe les noms et valeurs des attributs
ayant pour portée la session.

applicationScope

Une Map  qui associe les noms et valeurs des attributs
ayant pour portée l'application.

## Paramètres de requête

param

Une Map qui associe les noms et valeurs des paramètres 
de la requête.

paramValues

Une Map  qui associe les noms et multiples valeurs ** des paramètres
de la requête sous forme de tableaux de String.

##  En-têtes de requête

header

Une Map qui associe les noms et valeurs des paramètres 
des en-têtes HTTP.

headerValues

Une Map  qui associe les noms et multiples valeurs ** des paramètres
des en-têtes HTTP sous forme de tableaux de String.

## Cookies

cookie

Une Map qui associe les noms et instances des cookies.

## Paramètres d’initialisation

initParam

Une Map qui associe les données contenues dans les 
champs <param-name> et <param-value> de 
la section <init-param> du fichier web.xml.