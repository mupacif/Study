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


# portée 

page (JSP seulement) : les objets dans cette portée sont uniquement accessibles dans la page JSP en question ;

requête : les objets dans cette portée sont uniquement accessibles durant l'existence de la requête en cours ;

session : les objets dans cette portée sont accessibles durant l'existence de la session en cours ;

application : les objets dans cette portée sont accessibles durant toute l'existence de l'application.