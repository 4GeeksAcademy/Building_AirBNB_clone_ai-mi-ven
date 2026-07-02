# Project Requirements and Component Specification

## Product Context

- Interface: Airbnb-style browsing experience with three core surfaces: Home, Catalog, and Room Detail.
- Primary user: traveler comparing stays by destination, category, price, and room details before booking.
- UX goals: fast visual scanning of listings, instant filtering/sorting feedback, and clear room booking information.

## General Architecture Rules

- No pre-built UI libraries (Shadcn, MUI, Ant Design, Chakra UI).
- Styling uses Tailwind utility classes and custom components.
- State management uses local useState for search filtering, category selection, sorting, and related controls.

## Page-Level Functional Requirements

### 1) Home Page (/)

- Top navigation contains logo, search bar, and user menu controls.
- Real-time search filtering updates visible listings on every keystroke.
- Category filter row appears below the header and tracks the active category in state.
- Asynchronous loading uses useEffect + 1 second timeout to simulate fetched data with a visible loading state.
- Responsive listing grid starts as one column on mobile and expands to multiple columns on larger viewports.

### 2) Catalog Page (/catalog)

- Results header shows total results and a price sorting control (ascending/descending).
- Listing grid reuses the same PropertyCard component used on Home.
- Map section renders as a styled placeholder: right side on desktop, below listings on mobile.

## Shared Component Specifications

### 1) PageHeader

- Positioned at the top and spans full width.
- Contains logo, navigation menu, and user controls.
- Props:
   - fixed: boolean

### 2) SearchBar

- Centered in the header section below main nav controls.
- Props:
   - destination: string
   - checkInDate: string | Date
   - checkOutDate: string | Date
   - guestsCount: number
   - onSearchSubmit: function

### 3) ContentSection

- Vertical section wrapper used below the header.
- Designed to host row-based content such as PropertyCarousel.
- Props:
   - sectionTitle: string
   - hasSubtitle: boolean
   - subtitleText: string

### 4) PropertyCarousel

- Child of ContentSection.
- Horizontal scrolling row/grid for property cards.
- Props:
   - items: Property[]
   - enableNavigationArrows: boolean

### 5) PropertyCard

- Reused item card in Home grid, Catalog grid, and carousel contexts.
- Props:
   - imageUrl: string
   - isGuestFavorite: boolean
   - isSaved: boolean
   - title: string
   - location: string
   - pricePerNight: number
   - stayDuration: number
   - rating: number

## Evaluation Checklist

### Project Foundation and Structure
- [x] A context.md file exists and describes the interface, components, and user.
- [x] The project uses Next.js 16, TypeScript, Tailwind CSS, and App Router.
- [x] Components are split into individual single-responsibility files.
- [x] Components are functional and defined with const (no class components).
- [x] TypeScript interfaces are defined for main data shapes (listing, room).

### Routing and Navigation
- [x] Three routes are implemented and navigable: /, /catalog, and /rooms/[id].
- [x] Internal navigation uses Link.

### UI and Styling
- [x] Mobile-first layout is implemented.
- [x] PropertyCard is reused on Home and Catalog.
- [x] Tailwind utility classes are used for styling (no inline style objects).
- [x] Room Detail includes: photo gallery with navigation, listing header, host info, amenities, booking card.

### State and Lifecycle Management
- [x] useState is used in multiple required cases (search, category, sort, guests, gallery index).
- [x] useEffect simulates loading on at least two pages with visible loading states.

### Workflow and Documentation
- [x] Vision-to-spec workflow and component specs are documented in this file.
