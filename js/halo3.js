function Halo3Convert() {
    $('#main2').empty();
    $('#main2').append('<div class="select-main"><div data-gp="main2-1" data-action="menu" data-menu="main-serverbrowser" class="selection"><span class="label">BROWSE SERVERS</span><span class="value">&nbsp;</span></div><div data-gp="main2-2" data-action="menu" data-menu="main-custom" class="selection"><span class="label">CUSTOM GAMES</span><span class="value">&nbsp;</span></div><div data-gp="main2-3" data-action="menu" data-menu="main-forge" class="selection"><span class="label">FORGE</span><span class="value">&nbsp;</span></div><div data-gp="main2-4" data-action="menu" data-menu="main-options" class="selection"><span class="label">SETTINGS</span><span class="value">&nbsp;</span></div><div data-gp="main2-5" data-action="menu" data-menu="main2-credits" class="selection"><span class="label">CREDITS</span><span class="value">&nbsp;</span></div></div>');
    settings.musictrack.current = 5;
    settings.musictrack.update();
    settings.background.current = 6;
    settings.background.update();
}
