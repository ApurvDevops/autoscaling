<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>Color Game</title>
</head>
<body>
<center>
<hr size="10px" noshade  align=center width="700px" color="orange">
        <h1>{{ custom_heading }}</h1>
        <h1>We Are Testing AWS AutoScaling</h1>
        <h1> Todays date is: {{ todays_date }} </h1>
        <h1> Server hostname is: {{ host_name }} </h1>
        <h1> Server FQDN is: {{ fqdn_name }} </h1>
        <h1> Server IP Address is: {{ ip_address }} </h1>
<hr size="10px" noshade  align=center width="700px" color="orange">
</center>        
        <div id="smallcont">
                <div></div>
                <div id="try1">Lets Play</div>
        </div>
        <div id="container">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
        </div>

</body>
<script type="text/javascript" src="scorekeeper.js"></script>
</html>
