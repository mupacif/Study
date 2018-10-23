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
	}

    
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