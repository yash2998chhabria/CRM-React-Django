from django.contrib import admin
from .models import Article,stall_products,stall_frames

# Register your models here.
admin.site.register(Article)
admin.site.register(stall_products)
admin.site.register(stall_frames)