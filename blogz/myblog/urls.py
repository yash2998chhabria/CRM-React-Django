from django.contrib import admin
from django.urls import path,include
from . views import blogview, detailvieww,create_blog,update_blog,delete_blog,likeview,delete_c
from django.shortcuts import reverse


urlpatterns = [
    path('', blogview.as_view(), name = 'home' ),
    path('detail_view/<str:pk>/', detailvieww.as_view(), name = 'detail' ),
    path('createblog/', create_blog.as_view()   ,  name = 'createb' ),
    path('updateblog/<str:pk>', update_blog.as_view()   ,  name = 'updateb' ),
    path('deleteb/<str:pk>', delete_blog.as_view()   ,  name = 'deleteb' ),
    path('like/<str:pk>/',likeview,name='likef'),
    path('deletec/<str:pk>', delete_c.as_view()   ,  name = 'deletec' ),
    # path('createcomment/<str:pk>', createcomment ,  name = 'addc' )
] 