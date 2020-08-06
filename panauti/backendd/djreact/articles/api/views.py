from rest_framework.generics import ListAPIView,RetrieveAPIView
from .serializers import ArticleSerializer,ProductSerializer,StallSerializer,NormStallSerializer,StallCRUDSerializer
from articles.models import Article,stall_products,stall_frames
from rest_framework import viewsets




class ArticleView(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class ProductListView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = stall_products.objects.all()

class StallListView(ListAPIView):
    serializer_class = StallSerializer
    queryset = stall_frames.objects.all()

class StallDetailView(RetrieveAPIView):
    serializer_class = StallSerializer
    queryset = stall_frames.objects.all()


class StallCRUDView(viewsets.ModelViewSet):
    serializer_class = StallCRUDSerializer
    queryset = stall_frames.objects.all()


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = 
