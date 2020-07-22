from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.urls import reverse
from ckeditor.fields import RichTextField

# Create your models here.

class Category(models.Model):
    categorys= models.CharField(max_length=100)

class tag(models.Model):
    Title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    # body = models.TextField()
    body = RichTextField(blank = True,null = True)
    date_created= models.DateTimeField(auto_now_add=True)
    likes=models.ManyToManyField(User, related_name='blog_post')
    snippet = models.CharField(max_length=1000)
    # categoryz = models.ForeignKey(Category, default='Uncategorised',on_delete = models.CASCADE)
    
    
    def total_likes(self):
        return self.likes.count()

    def __str__(self):
        return self.Title + '|' + str (self.author)

    def get_absolute_url(self):
        return reverse('detail', kwargs={'pk': self.pk})

class comment(models.Model):
    post = models.ForeignKey(tag, related_name="comments", on_delete = models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    body = models.TextField()

    def __str__(self):
        return '%s - %s' % (self.post.Title,self.name)


