from .views import ArticleView 
from django.urls import path,include


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ArticleView, basename='userviewset')
urlpatterns = router.urls

# urlpatterns = [
#     path('',ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
# ]
