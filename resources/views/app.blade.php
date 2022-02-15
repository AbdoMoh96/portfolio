<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <script src="{{ mix('/landing/Resources/js/script.js') }}" defer></script>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
    <title></title>
    @inertiaHead
</head>
<body>
  @routes
  <div id="root" data-page="{{ json_encode($page) }}"></div>
</body>
</html>
