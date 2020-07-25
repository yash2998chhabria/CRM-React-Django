from rest_framework import serializers,permissions
from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        permission_classes = [
            permissions.AllowAny
        ]
        fields = ['id','title','content']