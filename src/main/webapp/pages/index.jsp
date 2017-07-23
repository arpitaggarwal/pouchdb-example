<!DOCTYPE html>
<html>
<head>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<title>PouchDB</title>

<script type="text/javascript" src="js/angular.min.js"></script>

<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="js/pouchdb.min.js"></script>

<!-- 
<script type="text/javascript" src="//cdn.jsdelivr.net/pouchdb/6.0.5/pouchdb.min.js"></script> -->
<script type="text/javascript" src="js/pouchdb-service.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<!-- 
<script type="text/javascript"
	src="/bower_components/ydn.db/jsc/ydn.db-dev.js"></script> -->
<%-- <spring:url value="/bower_components/ydn.db/jsc/ydn.db-dev.js" var="appJsUrl" htmlEscape="true" />
<script src="${appJsUrl}"></script> --%>
<%-- 
<spring:url value="/js/app.js" var="appJsUrl" htmlEscape="true" />

<script src="${scriptJsUrl}"></script>
<script src="${appJsUrl}"></script> --%>


</head>

<body  data-ng-app="myapp" data-ng-controller="MainCtrl"></body>
</html>
