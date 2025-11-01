Pagination:

Pagination VS Infinite Scrolling:

Pagination:
-> Structure and Heirarchy
-> data (finite)
-> back and forth movement
-> Can see the footer
-> Friction is more (to click on page number,next page, previous like that)

Infinite Scroll:
-> for real time data (Dynamic)
-> Addictive
-> Mobile friendly
-> Not seo friendly
-> searching is difficult

Google has shifted to infinite Scroll


Two Types of pagination:
1. Frontend Pagination : Fetch all the whole data from server at once, and divide it in frontend
2. Server Side Pagination : Fetch the data pages and batch wise from server itself.



1.Frontend Pagination : 
Pros:
Once we fetched the data, we dont need to call api again and again to server. 
faster Page Navigation.
Easy to implement.
map, filter, reduce to all the data.


cons:
Initial Load Time Will Be high
Browser heavy
It can be very slow, if the data is huge


2. Server Side Pagination
Pros: 
works good on large data
initial load time is fast


Cons:
large number of api calls
sorting, searching will be on backend
Backend Dependency


======Offset Pagination:==========
API : /products?page=2&count=15
offset :  page 
limit: count


Issues with Offset Pagination:
There  can be data inconsistency:
Missing or duplicate Data in case of frequent data change
Missing -  in case, any row is deleted, and in offset it shifted towards front.
Duplicate - in case, any data is added, while shifting from one page to another.
Difficult Caching:
Because the offset changes frequently, it’s hard to cache results meaningfully.
Example: Page 50 may differ if new records are inserted before it.


=======Cursor Pagination========= (Facebook Suggested)
Good for real time (dynamic data)
No Skipped/Missing Entries
faster than Offset Pagination

the positions remains fixed, so we use cursor and offset, 
ex ; cursor : 5, offset : 5 means wherever 5 is present, take offset values from there,
so there will be inserted,it will be inserted at top.
Cursor is like array, offset is like LinkedList
Social Media

Cons:
good for Infinite Scroll, but not for pagination
Sorting is difficult
trickier to implement



💡 Best Practices
Use pagination for:
Search results
Product catalogs
Admin/data dashboards
News archives

Use infinite scroll for:
Feeds or discovery-based content
Social apps, media galleries, and user-generated content streams

Hybrid approach (Load More button)
Offers the best of both worlds:
Infinite scroll–like continuity
Pagination-like control and performance stability
