from django import forms
from . models import tag,Category,comment


# choices = Category.objects.all().values_list('categorys','categorys')

# choice_listt = [('tt','tt')]
# choice_list=[]
# for items in choices:
#     choice_list.append(items)

class tagform(forms.ModelForm):
    class Meta:  
        model = tag
        fields = ('Title','author','body','snippet')
        
        wigets =  {
            'Title' : forms.TextInput(attrs = {'class':'form-control'}),
            'author' : forms.Select(attrs = {'class':'form-control'}),
            'body' : forms.Textarea(attrs = {'class':'form-control'}),
            'snippet' : forms.Textarea(attrs = {'class':'form-control'}),
        }
class commentform(forms.ModelForm):
    class Meta:  
        model = comment
        fields = ('post','name','body')
    
        wigets =  {
            
            'name' : forms.Textarea(attrs = {'class':'form-control'}),
            'body' : forms.Textarea(attrs = {'class':'form-control'}),
            
        }
