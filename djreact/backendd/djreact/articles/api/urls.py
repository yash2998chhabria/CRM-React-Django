from .views import ArticleListView , ArticleDetailView
from django.urls import path,include

urlpatterns = [
    path('',ArticleListView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
]
