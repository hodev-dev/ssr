<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="google-site-verification" content="q9OXpUOG_7_UUa-HIzGlrFoPwKkiyQ63hKDr8pkQI_Y" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{json_decode($config)->title}}</title>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript">
        var _props = @json($config)
    </script>
    <script defer src="{{ asset('/js/'. $page)  }}"></script>
</body>

</html>