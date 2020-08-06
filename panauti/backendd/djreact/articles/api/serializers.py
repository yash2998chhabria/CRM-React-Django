from rest_framework import serializers,permissions
from articles.models import Article,stall_products,stall_frames


class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        permission_classes = [
            permissions.AllowAny
        ]
        fields = ['id','title','content']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=stall_products
        permission_classes =[
            permissions.AllowAny
        ]
        fields ='__all__'

class NormStallSerializer(serializers.ModelSerializer):
    class Meta:
        model=stall_frames
        permission_classes =[
            permissions.AllowAny
        ]
        fields ='__all__'

class StallSerializer(serializers.ModelSerializer):
    product= ProductSerializer(many=True)
    class Meta:
        model=stall_frames
        permission_classes =[
            permissions.AllowAny
        ]
        fields ='__all__'

class StallCRUDSerializer(serializers.ModelSerializer):
    product= ProductSerializer(many=True)
    class Meta:
        model=stall_frames
        permission_classes =[
            permissions.AllowAny
        ]
        # fields ='__all__'
        exclude = ['stall_user','premium']