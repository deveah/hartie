
var slides = {};
var currentSlide = 0;

function refresh()
{
	for( var i = 0; i < slides.length; i++ )
	{
		slides[i].style.visibility = "hidden";
		slides[i].style.position = "absolute";
	}
	
	slides[currentSlide].style.visibility = "visible";
}

function nextSlide()
{
	if( currentSlide + 1 < slides.length )
		currentSlide++;

	refresh();
}

function prevSlide()
{
	if( currentSlide - 1 >= 0 )
		currentSlide--;
	
	refresh();
}

function homeSlide()
{
	currentSlide = 0;
	refresh();
}

function endSlide()
{
	currentSlide = slides.length - 1;
	refresh();
}

function handleKey( e )
{
	var ev = e || window.event;
	if( ev.keyCode == 37 ) /* left arrow key */
		prevSlide();	
	if( ev.keyCode == 39 ) /* right arrow key */
		nextSlide();
	if( ev.keyCode == 36 ) /* home key */
		homeSlide();
	if( ev.keyCode == 35 ) /* end key */
		endSlide();
}

function main()
{
	slides = document.getElementsByClassName( "slide" );
	refresh();
}

