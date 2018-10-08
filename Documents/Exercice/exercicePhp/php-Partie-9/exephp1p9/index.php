<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Exercice 1</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <h1>Exercice 1</h1>
            <a href="http://exephpp9/">Index</a>
        </nav>
        <p>
            <?php
            // variable $date définie par date(d/m/Y)
            $date = date('d/m/Y');
            Print($date);
            ?>
        </p>
    </body>
</html>
