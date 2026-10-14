/* ReelFinder — Movie Explorer
   Get a TMDB Read Access Token at https://www.themoviedb.org/settings/api
   Keep your token private. Do not publish a real token in a public repository.
*/
const TMDB_TOKEN = "PASTE_YOUR_TMDB_READ_ACCESS_TOKEN_HERE";
const API_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

const translations = {
  ru: {
    popular: "Популярные", topRated: "Лучшие", nowPlaying: "В кино", trending: "Тренды", favorites: "Избранное",
    language: "Язык", heroEyebrow: "ТВОЯ СЛЕДУЮЩАЯ ИСТОРИЯ НАЧИНАЕТСЯ ЗДЕСЬ", heroTitle: "Найди фильм под своё настроение.",
    heroDescription: "Исследуй популярные премьеры, оценивай рейтинги и сохраняй фильмы, которые хочешь посмотреть.",
    searchPlaceholder: "Название фильма...", search: "Найти", discoverEyebrow: "ВЫБИРАЙ И ОТКРЫВАЙ", popularMovies: "Популярные фильмы",
    topRatedMovies: "Лучшие фильмы", nowPlayingMovies: "Сейчас в кино", trendingMovies: "Фильмы в тренде", favoriteMovies: "Избранное",
    searchResults: "Результаты поиска", genre: "Жанр", allGenres: "Все жанры", year: "Год", allYears: "Все годы",
    minRating: "Минимальный рейтинг", anyRating: "Любой рейтинг", sortBy: "Сортировка", recommended: "Рекомендуемые",
    ratingHigh: "Сначала высокий рейтинг", newest: "Сначала новые", titleAZ: "Название A–Z", resetFilters: "Сбросить фильтры",
    noMovies: "Фильмы не найдены", noMoviesDescription: "Попробуй изменить запрос или фильтры.", previous: "← Назад", next: "Вперёд →",
    footerText: "Данные о фильмах предоставлены The Movie Database (TMDB).", details: "Подробнее", releaseDate: "Дата выхода",
    overview: "Описание", genres: "Жанры", budget: "Бюджет", revenue: "Сборы", runtime: "Длительность", minutes: "мин.",
    companies: "Кинокомпании", languages: "Языки", countries: "Страны", notAvailable: "Нет данных", noOverview: "Описание пока недоступно.",
    loading: "Загружаем фильмы...", loadingDetails: "Загружаем информацию о фильме...", apiError: "Не удалось загрузить фильмы.",
    tokenError: "Добавь свой TMDB Read Access Token в начало файла script.js.", retry: "Повторить", emptyFavorites: "В избранном пока пусто",
    emptyFavoritesDescription: "Нажми на сердечко на карточке фильма, чтобы сохранить его здесь.", searchEmpty: "Введи название фильма для поиска.",
    noSearchResults: "По этому запросу ничего не найдено.", addedFavorite: "Добавлено в избранное", removedFavorite: "Удалено из избранного",
    page: "Страница", close: "Закрыть", votes: "голосов", vote: "голос"
  },
  en: {
    popular: "Popular", topRated: "Top rated", nowPlaying: "Now playing", trending: "Trending", favorites: "Favorites",
    language: "Language", heroEyebrow: "YOUR NEXT STORY STARTS HERE", heroTitle: "Find a movie for your mood.",
    heroDescription: "Explore popular releases, check ratings, and save movies you want to watch.", searchPlaceholder: "Movie title...",
    search: "Search", discoverEyebrow: "PICK. DISCOVER. ENJOY.", popularMovies: "Popular movies", topRatedMovies: "Top rated movies",
    nowPlayingMovies: "Now playing", trendingMovies: "Trending movies", favoriteMovies: "Your favorites", searchResults: "Search results",
    genre: "Genre", allGenres: "All genres", year: "Year", allYears: "All years", minRating: "Minimum rating", anyRating: "Any rating",
    sortBy: "Sort by", recommended: "Recommended", ratingHigh: "Highest rating first", newest: "Newest first", titleAZ: "Title A–Z",
    resetFilters: "Reset filters", noMovies: "No movies found", noMoviesDescription: "Try changing your search or filters.",
    previous: "← Previous", next: "Next →", footerText: "Movie data provided by The Movie Database (TMDB).", details: "Details",
    releaseDate: "Release date", overview: "Overview", genres: "Genres", budget: "Budget", revenue: "Revenue", runtime: "Runtime",
    minutes: "min", companies: "Production companies", languages: "Languages", countries: "Countries", notAvailable: "Not available",
    noOverview: "No overview available yet.", loading: "Loading movies...", loadingDetails: "Loading movie details...",
    apiError: "Could not load movies.", tokenError: "Add your TMDB Read Access Token at the top of script.js.", retry: "Retry",
    emptyFavorites: "Your favorites list is empty", emptyFavoritesDescription: "Tap the heart on a movie card to save it here.",
    searchEmpty: "Enter a movie title to search.", noSearchResults: "No results found for this search.", addedFavorite: "Added to favorites",
    removedFavorite: "Removed from favorites", page: "Page", close: "Close", votes: "votes", vote: "vote"
  },
  az: {
    popular: "Populyar", topRated: "Ən yüksək reytinq", nowPlaying: "Kinoteatrlarda", trending: "Trend", favorites: "Seçilmişlər",
    language: "Dil", heroEyebrow: "NÖVBƏTİ HEKAYƏN BURADAN BAŞLAYIR", heroTitle: "Əhvalına uyğun film tap.",
    heroDescription: "Populyar filmləri kəşf et, reytinqlərə bax və izləmək istədiyin filmləri yadda saxla.",
    searchPlaceholder: "Filmin adı...", search: "Axtar", discoverEyebrow: "SEÇ. KƏŞF ET. ZÖVQ AL.", popularMovies: "Populyar filmlər",
    topRatedMovies: "Ən yüksək reytinqli filmlər", nowPlayingMovies: "Hazırda kinoteatrlarda", trendingMovies: "Trend filmlər",
    favoriteMovies: "Seçilmiş filmlərin", searchResults: "Axtarış nəticələri", genre: "Janr", allGenres: "Bütün janrlar", year: "İl",
    allYears: "Bütün illər", minRating: "Minimum reytinq", anyRating: "İstənilən reytinq", sortBy: "Sıralama",
    recommended: "Tövsiyə olunan", ratingHigh: "Əvvəl yüksək reytinq", newest: "Əvvəl yenilər", titleAZ: "Ad A–Z",
    resetFilters: "Filtrləri sıfırla", noMovies: "Film tapılmadı", noMoviesDescription: "Axtarışı və ya filtrləri dəyişməyi yoxla.",
    previous: "← Geri", next: "İrəli →", footerText: "Film məlumatları The Movie Database (TMDB) tərəfindən təqdim olunur.",
    details: "Ətraflı", releaseDate: "Buraxılış tarixi", overview: "Təsvir", genres: "Janrlar", budget: "Büdcə", revenue: "Gəlir",
    runtime: "Müddət", minutes: "dəq.", companies: "İstehsal şirkətləri", languages: "Dillər", countries: "Ölkələr",
    notAvailable: "Məlumat yoxdur", noOverview: "Təsvir hələ mövcud deyil.", loading: "Filmlər yüklənir...", loadingDetails: "Film məlumatları yüklənir...",
    apiError: "Filmləri yükləmək mümkün olmadı.", tokenError: "script.js faylının əvvəlində TMDB Read Access Token əlavə et.", retry: "Yenidən yoxla",
    emptyFavorites: "Seçilmişlər siyahısı boşdur", emptyFavoritesDescription: "Filmi burada saxlamaq üçün kartdakı ürək işarəsinə toxun.",
    searchEmpty: "Axtarış üçün filmin adını daxil et.", noSearchResults: "Bu axtarış üzrə nəticə tapılmadı.", addedFavorite: "Seçilmişlərə əlavə edildi",
    removedFavorite: "Seçilmişlərdən silindi", page: "Səhifə", close: "Bağla", votes: "səs", vote: "səs"
  }
};

const state = {
  language: localStorage.getItem("reelfinder-language") || "ru",
  section: "popular",
  query: "",
  page: 1,
  totalPages: 1,
  movies: [],
  genres: [],
  favorites: JSON.parse(localStorage.getItem("reelfinder-favorites") || "[]"),
  theme: localStorage.getItem("reelfinder-theme") || "dark",
  requestId: 0
};

const el = {
  language: document.querySelector("#languageSelect"), theme: document.querySelector("#themeToggle"),
  navButtons: [...document.querySelectorAll(".nav-button")], searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"), sectionTitle: document.querySelector("#sectionTitle"),
  genre: document.querySelector("#genreFilter"), year: document.querySelector("#yearFilter"), rating: document.querySelector("#ratingFilter"),
  sort: document.querySelector("#sortFilter"), reset: document.querySelector("#resetFilters"), grid: document.querySelector("#movieGrid"),
  status: document.querySelector("#statusMessage"), empty: document.querySelector("#emptyState"), prev: document.querySelector("#prevPage"),
  next: document.querySelector("#nextPage"), pageInfo: document.querySelector("#pageInfo"), favoriteCount: document.querySelector("#favoriteCount"),
  modal: document.querySelector("#movieModal"), modalContent: document.querySelector("#modalContent"), closeModal: document.querySelector("#closeModal")
};

function t(key) { return translations[state.language]?.[key] || translations.en[key] || key; }
function apiLanguage() { return ({ ru: "ru-RU", en: "en-US", az: "az-AZ" })[state.language] || "en-US"; }
function escapeHTML(value = "") { return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]); }
function formatMoney(value) {
  if (!value) return t("notAvailable");
  try { return new Intl.NumberFormat(state.language === "az" ? "az-AZ" : state.language === "ru" ? "ru-RU" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }
  catch { return `$${Number(value).toLocaleString()}`; }
}
function formatDate(date) {
  if (!date) return t("notAvailable");
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(state.language === "ru" ? "ru-RU" : state.language === "az" ? "az-AZ" : "en-US", { year: "numeric", month: "short", day: "numeric" }).format(parsed);
}
function movieTitle(movie) { return movie.title || movie.name || t("notAvailable"); }
function movieYear(movie) { return movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date ? movie.first_air_date.slice(0, 4) : "—"; }
function imageMarkup(path, title, extraClass = "poster") {
  if (!path) return `<div class="poster-placeholder">🎬<br>${escapeHTML(title)}</div>`;
  return `<img class="${extraClass}" src="${IMAGE_URL}${path}" alt="${escapeHTML(title)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'poster-placeholder',textContent:'🎬 ${escapeHTML(title)}'}))">`;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (translations[state.language][key]) node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  el.language.value = state.language;
  el.theme.textContent = state.theme === "dark" ? "☼" : "☾";
  el.theme.title = state.theme === "dark" ? (state.language === "ru" ? "Светлая тема" : state.language === "az" ? "Açıq mövzu" : "Light theme") : (state.language === "ru" ? "Тёмная тема" : state.language === "az" ? "Tünd mövzu" : "Dark theme");
  document.querySelector(".logo").setAttribute("aria-label", state.language === "ru" ? "На главную ReelFinder" : state.language === "az" ? "ReelFinder ana səhifə" : "ReelFinder home");
  el.closeModal.setAttribute("aria-label", t("close"));
  updateSectionTitle();
  updateFavoriteCount();
  renderMovies();
  if (el.modal.classList.contains("open") && el.modal.dataset.movieId) loadMovieDetails(el.modal.dataset.movieId, true);
}

function applyTheme() {
  document.body.classList.toggle("light-theme", state.theme === "light");
  localStorage.setItem("reelfinder-theme", state.theme);
  el.theme.textContent = state.theme === "dark" ? "☼" : "☾";
}

function updateSectionTitle() {
  const titleKey = state.query ? "searchResults" : ({ popular: "popularMovies", top_rated: "topRatedMovies", now_playing: "nowPlayingMovies", trending: "trendingMovies", favorites: "favoriteMovies" })[state.section];
  el.sectionTitle.textContent = t(titleKey || "popularMovies");
  el.navButtons.forEach(button => button.classList.toggle("active", button.dataset.section === state.section));
}

function updateFavoriteCount() { el.favoriteCount.textContent = String(state.favorites.length); }
function saveFavorites() {
  localStorage.setItem("reelfinder-favorites", JSON.stringify(state.favorites));
  updateFavoriteCount();
}
function favoriteHas(id) { return state.favorites.some(movie => Number(movie.id) === Number(id)); }
function toggleFavorite(id) {
  const movie = state.movies.find(item => Number(item.id) === Number(id)) || state.favorites.find(item => Number(item.id) === Number(id));
  if (!movie) return;
  if (favoriteHas(id)) {
    state.favorites = state.favorites.filter(item => Number(item.id) !== Number(id));
    showStatus(t("removedFavorite"));
  } else {
    state.favorites.unshift(movie);
    showStatus(t("addedFavorite"));
  }
  saveFavorites();
  renderMovies();
}

function showStatus(message, type = "", withRetry = false) {
  el.status.hidden = !message;
  el.status.className = `status-message ${type}`;
  el.status.textContent = message;
  if (withRetry) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = t("retry");
    button.addEventListener("click", loadMovies);
    el.status.append(" ", button);
  }
}

async function fetchJSON(url, params = {}) {
  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${TMDB_TOKEN}`, Accept: "application/json" },
    // TMDB accepts language in query parameters.
    ...{}
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
function buildURL(path, params = {}) {
  const query = new URLSearchParams({ language: apiLanguage(), ...params });
  return `${API_URL}${path}?${query.toString()}`;
}
async function fetchMovies(path, params = {}) {
  const response = await fetch(buildURL(path, params), { headers: { Authorization: `Bearer ${TMDB_TOKEN}`, Accept: "application/json" } });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadGenres() {
  if (TMDB_TOKEN.includes("PASTE_YOUR")) return;
  try {
    const data = await fetchMovies("/genre/movie/list");
    state.genres = data.genres || [];
    fillGenreFilter();
  } catch (error) { console.error("Could not load genres:", error); }
}
function fillGenreFilter() {
  const current = el.genre.value;
  el.genre.innerHTML = `<option value="">${escapeHTML(t("allGenres"))}</option>` + state.genres.map(genre => `<option value="${genre.id}">${escapeHTML(genre.name)}</option>`).join("");
  if ([...el.genre.options].some(option => option.value === current)) el.genre.value = current;
}
function fillYearFilter() {
  const current = el.year.value;
  const yearOptions = Array.from({ length: 75 }, (_, index) => new Date().getFullYear() + 1 - index);
  el.year.innerHTML = `<option value="">${escapeHTML(t("allYears"))}</option>` + yearOptions.map(year => `<option value="${year}">${year}</option>`).join("");
  if ([...el.year.options].some(option => option.value === current)) el.year.value = current;
}

function getMovieEndpoint() {
  if (state.query) return { path: "/search/movie", params: { query: state.query, page: state.page, include_adult: "false" } };
  if (state.section === "trending") return { path: "/trending/movie/week", params: { page: state.page } };
  if (state.section === "top_rated") return { path: "/movie/top_rated", params: { page: state.page } };
  if (state.section === "now_playing") return { path: "/movie/now_playing", params: { page: state.page } };
  return { path: "/movie/popular", params: { page: state.page } };
}
function hasServerFilters() { return !state.query && state.section !== "favorites" && (el.genre.value || el.year.value || Number(el.rating.value) > 0); }

async function loadMovies() {
  const requestId = ++state.requestId;
  if (TMDB_TOKEN.includes("PASTE_YOUR")) {
    state.movies = [];
    renderMovies();
    showStatus(t("tokenError"), "error");
    return;
  }
  if (state.section === "favorites" && !state.query) {
    state.movies = [...state.favorites]; state.totalPages = 1; state.page = 1;
    showStatus(""); renderMovies(); updatePagination(); return;
  }
  showStatus(t("loading"));
  el.empty.hidden = true;
  const endpoint = getMovieEndpoint();
  const params = { ...endpoint.params };
  if (hasServerFilters()) {
    endpoint.path = "/discover/movie";
    delete params.query;
    params.sort_by = el.sort.value === "rating" ? "vote_average.desc" : el.sort.value === "date" ? "primary_release_date.desc" : "popularity.desc";
    if (el.genre.value) params.with_genres = el.genre.value;
    if (el.year.value) params.primary_release_year = el.year.value;
    if (Number(el.rating.value) > 0) params["vote_average.gte"] = el.rating.value;
    params.page = state.page;
  }
  try {
    // Fetch API is used for the movie lists.
    const data = await fetchMovies(endpoint.path, params);
    if (requestId !== state.requestId) return;
    state.movies = data.results || [];
    state.totalPages = Math.min(data.total_pages || 1, 500);
    if (state.section === "favorites" && state.query) {
      const query = state.query.toLowerCase();
      state.movies = state.favorites.filter(movie => movieTitle(movie).toLowerCase().includes(query));
      state.totalPages = 1;
    }
    showStatus("");
    renderMovies();
    updatePagination();
  } catch (error) {
    if (requestId !== state.requestId) return;
    console.error(error);
    state.movies = [];
    renderMovies();
    showStatus(t("apiError"), "error", true);
  }
}

function filteredMovies() {
  let list = [...state.movies];
  if (state.section === "favorites" && !state.query) list = [...state.favorites];
  const selectedYear = el.year.value;
  const selectedGenre = el.genre.value;
  const minimumRating = Number(el.rating.value || 0);
  if (selectedYear) list = list.filter(movie => movieYear(movie) === selectedYear);
  if (selectedGenre && !hasServerFilters()) list = list.filter(movie => (movie.genre_ids || []).includes(Number(selectedGenre)));
  if (minimumRating && !hasServerFilters()) list = list.filter(movie => Number(movie.vote_average) >= minimumRating);
  if (el.sort.value === "rating") list.sort((a, b) => Number(b.vote_average) - Number(a.vote_average));
  if (el.sort.value === "date") list.sort((a, b) => (b.release_date || "").localeCompare(a.release_date || ""));
  if (el.sort.value === "title") list.sort((a, b) => movieTitle(a).localeCompare(movieTitle(b), state.language));
  return list;
}

function renderMovies() {
  const movies = filteredMovies();
  el.grid.innerHTML = "";
  el.empty.hidden = movies.length > 0;
  if (!movies.length) {
    const title = el.empty.querySelector("h3");
    const description = el.empty.querySelector("p");
    if (state.section === "favorites" && !state.query) {
      title.textContent = t("emptyFavorites"); description.textContent = t("emptyFavoritesDescription");
    } else if (state.query) {
      title.textContent = t("noMovies"); description.textContent = t("noSearchResults");
    } else {
      title.textContent = t("noMovies"); description.textContent = t("noMoviesDescription");
    }
  }
  movies.forEach((movie, index) => {
    const card = document.createElement("article");
    card.className = "movie-card";
    card.style.animationDelay = `${Math.min(index * 35, 250)}ms`;
    const title = movieTitle(movie);
    const favorite = favoriteHas(movie.id);
    card.innerHTML = `
      <div class="poster-wrap">
        ${imageMarkup(movie.poster_path, title)}
        <span class="rating-pill">★ ${Number(movie.vote_average || 0).toFixed(1)}</span>
        <button class="favorite-button ${favorite ? "is-favorite" : ""}" type="button" data-favorite="${movie.id}" aria-label="${favorite ? t("removedFavorite") : t("addedFavorite")}" title="${favorite ? t("removedFavorite") : t("addedFavorite")}">${favorite ? "♥" : "♡"}</button>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${escapeHTML(title)}</h3>
        <div class="movie-meta"><span>${escapeHTML(movieYear(movie))}</span><span class="dot"></span><span>★ ${Number(movie.vote_average || 0).toFixed(1)}</span></div>
        <button class="details-link" type="button" data-details="${movie.id}">${escapeHTML(t("details"))} ↗</button>
      </div>`;
    el.grid.append(card);
  });
  el.grid.querySelectorAll("[data-favorite]").forEach(button => button.addEventListener("click", () => toggleFavorite(button.dataset.favorite)));
  el.grid.querySelectorAll("[data-details]").forEach(button => button.addEventListener("click", () => openMovieModal(button.dataset.details)));
  updateSectionTitle();
  updateFavoriteCount();
}

function updatePagination() {
  const canPaginate = state.section !== "favorites" && !state.query ? true : state.section !== "favorites";
  document.querySelector(".pagination").hidden = !canPaginate;
  el.pageInfo.textContent = `${t("page")} ${state.page} / ${state.totalPages}`;
  el.prev.disabled = state.page <= 1;
  el.next.disabled = state.page >= state.totalPages;
}

function openMovieModal(id) {
  el.modal.classList.add("open");
  el.modal.setAttribute("aria-hidden", "false");
  el.modal.dataset.movieId = id;
  document.body.style.overflow = "hidden";
  el.modalContent.innerHTML = `<div class="modal-body"><div class="loading-skeleton"></div><p>${escapeHTML(t("loadingDetails"))}</p></div>`;
  loadMovieDetails(id);
}
function closeMovieModal() {
  el.modal.classList.remove("open");
  el.modal.setAttribute("aria-hidden", "true");
  delete el.modal.dataset.movieId;
  document.body.style.overflow = "";
}

async function loadMovieDetails(id, languageRefresh = false) {
  if (TMDB_TOKEN.includes("PASTE_YOUR")) return;
  const movieId = Number(id);
  try {
    // Axios is used for a separate request with detailed movie information.
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      headers: { Authorization: `Bearer ${TMDB_TOKEN}`, Accept: "application/json" },
      params: { language: apiLanguage(), append_to_response: "credits" }
    });
    if (!el.modal.classList.contains("open") || Number(el.modal.dataset.movieId) !== movieId) return;
    renderMovieDetails(response.data);
  } catch (error) {
    console.error(error);
    if (!languageRefresh) el.modalContent.innerHTML = `<div class="modal-body"><p class="status-message error">${escapeHTML(t("apiError"))}</p></div>`;
  }
}
function renderMovieDetails(movie) {
  const title = movieTitle(movie);
  const genres = (movie.genres || []).map(genre => `<span class="genre-tag">${escapeHTML(genre.name)}</span>`).join("") || `<span class="detail-value">${escapeHTML(t("notAvailable"))}</span>`;
  const companies = (movie.production_companies || []).map(company => company.name).filter(Boolean).join(", ") || t("notAvailable");
  const languages = (movie.spoken_languages || []).map(language => language.english_name || language.name).filter(Boolean).join(", ") || t("notAvailable");
  const countries = (movie.production_countries || []).map(country => country.name).filter(Boolean).join(", ") || t("notAvailable");
  const runtime = movie.runtime ? `${movie.runtime} ${t("minutes")}` : t("notAvailable");
  const background = movie.backdrop_path ? `style="background-image:url('${BACKDROP_URL}${movie.backdrop_path}')"` : "";
  el.modalContent.innerHTML = `
    <div class="modal-hero" ${background}>
      <div class="modal-hero-copy"><p class="eyebrow">${escapeHTML(t("details"))}</p><h2 id="modalTitle">${escapeHTML(title)}</h2>
      <div class="modal-subtitle"><span>★ ${Number(movie.vote_average || 0).toFixed(1)} / 10</span><span>• ${escapeHTML(formatDate(movie.release_date))}</span><span>• ${escapeHTML(runtime)}</span></div></div>
    </div>
    <div class="modal-body">
      <h3>${escapeHTML(t("overview"))}</h3><p class="modal-overview">${escapeHTML(movie.overview || t("noOverview"))}</p>
      <h3>${escapeHTML(t("genres"))}</h3><div class="genre-list">${genres}</div>
      <div class="detail-grid">
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("releaseDate"))}</span><span class="detail-value">${escapeHTML(formatDate(movie.release_date))}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("runtime"))}</span><span class="detail-value">${escapeHTML(runtime)}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("budget"))}</span><span class="detail-value">${escapeHTML(formatMoney(movie.budget))}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("revenue"))}</span><span class="detail-value">${escapeHTML(formatMoney(movie.revenue))}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("companies"))}</span><span class="detail-value">${escapeHTML(companies)}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("languages"))}</span><span class="detail-value">${escapeHTML(languages)}</span></div>
        <div class="detail-item"><span class="detail-label">${escapeHTML(t("countries"))}</span><span class="detail-value">${escapeHTML(countries)}</span></div>
      </div>
    </div>`;
}

function resetFilters() {
  el.genre.value = ""; el.year.value = ""; el.rating.value = "0"; el.sort.value = "default";
  state.page = 1; loadMovies();
}

el.language.addEventListener("change", () => {
  state.language = el.language.value;
  localStorage.setItem("reelfinder-language", state.language);
  applyLanguage();
  fillYearFilter();
  loadGenres().then(() => loadMovies());
});
el.theme.addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; applyTheme(); applyLanguage(); });
el.navButtons.forEach(button => button.addEventListener("click", () => {
  state.section = button.dataset.section; state.query = ""; state.page = 1; el.searchInput.value = ""; loadMovies();
}));
el.searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const query = el.searchInput.value.trim();
  if (!query) { showStatus(t("searchEmpty"), "error"); el.searchInput.focus(); return; }
  state.query = query; state.page = 1; loadMovies();
});
[el.genre, el.year, el.rating, el.sort].forEach(control => control.addEventListener("change", () => { state.page = 1; loadMovies(); }));
el.reset.addEventListener("click", resetFilters);
el.prev.addEventListener("click", () => { if (state.page > 1) { state.page--; loadMovies(); window.scrollTo({ top: 0, behavior: "smooth" }); } });
el.next.addEventListener("click", () => { if (state.page < state.totalPages) { state.page++; loadMovies(); window.scrollTo({ top: 0, behavior: "smooth" }); } });
el.closeModal.addEventListener("click", closeMovieModal);
el.modal.querySelector("[data-close-modal]").addEventListener("click", closeMovieModal);
document.addEventListener("keydown", event => { if (event.key === "Escape" && el.modal.classList.contains("open")) closeMovieModal(); });

document.querySelector("#currentYear").textContent = new Date().getFullYear();
fillYearFilter();
applyTheme();
applyLanguage();
loadGenres().then(() => loadMovies());
