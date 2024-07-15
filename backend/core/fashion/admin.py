from django.contrib import admin

# Register your models here.
from .models import Product,Wishlist
list_display = ('user', 'product')
search_fields = ('user__username', 'product__name')

admin.site.register(Product)
admin.site.register(Wishlist)
