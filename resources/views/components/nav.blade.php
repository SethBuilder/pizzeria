<nav class="z-10 md:items-center md:flex md:justify-between md:px-20 md:py-0"
    style="background: rgba(0,0,0,0.6);backdrop-filter: saturate(180%) blur(20px);">
    <div class="flex items-center justify-between md:p-3 px-4 py-3 ">
        <div>
            <img class="h-10" src="{{ asset('logo-recharge-ae.png') }}"
                alt="{{ config('app.name', 'recharge.ae') }}" />
        </div>
        <div class="md:hidden">
            <button onclick="toggle()" class="block text-gray-500 focus:text-white hover:text-white" hover
                type="button">
                <svg id="menu-icon" class="h-4 w-4 fill-current" viewBox="0 0 100 80">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                <button onclick="toggle()"
                    class="hidden font-bold block text-gray-500 focus:text-white hover:text-white"
                    id="close-icon">X</button>
            </button>
        </div>
    </div>
    <div id="hamburgerMenu" class="pt-2 pb-2 hidden md:flex md:pb-4">
        <a class="block text-white font-semibold hover:bg-gray-800 px-2 py-1 md:mt-1" href="#">Support</a>
        <a class="mt-1 block text-white font-semibold hover:bg-gray-800 px-2 py-1 md:mt-0 md:ml-2" href="#">How it
            works?</a>
        <ul class="navbar-nav ml-auto">
            @guest
                <a class="mt-1 block text-white font-semibold hover:bg-gray-800 px-2 py-1 md:mt-0 md:ml-2 md:border md:border-white"
                    href="#">Login / Join</a>
            @else
                <li
                    class="nav-item dropdown mt-1 block text-white font-semibold hover:bg-gray-800 px-2 py-1 md:mt-0 md:ml-2 md:border md:border-white">
                    <a id="navbarDropdown" class="dropdown-toggle text-white" href="#" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-center" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                            style="display: none;">
                            @csrf
                        </form>
                    </div>
                </li>
            @endguest
        </ul>
    </div>

</nav>

<script>
    function toggle() {
        var menu = document.getElementById("hamburgerMenu");
        var menuIcon = document.getElementById("menu-icon");
        var closeIcon = document.getElementById("close-icon");
        menu.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    }

</script>
