from fashion.views import *
from django.urls import path
from fashion.views import *
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('products/', ProductListCreateAPIView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('wishlists/', WishlistListCreateAPIView.as_view(), name='wishlist-list-create'),
    path('wishlists/<int:pk>/', WishlistDetailAPIView.as_view(), name='wishlist-detail'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('wishlist/add/<int:product_id>/', AddToWishlistView.as_view(), name='add_to_wishlist'),
]